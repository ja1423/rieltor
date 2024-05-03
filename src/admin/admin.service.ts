import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AdminService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private logger: Logger,
  ) {}
  async getTokens(userId: number, email: string): Promise<Tokens> {
    const jwtPayload: JwtPayload = {
      sub: userId,
      email: email,
    };
    console.log(4);

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async updateRefreshToken(userId: number, refreshToken: string) {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 7);
    await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        hashedRefreshToken,
      },
    });
  }

  async signUp(createUserDto: CreateUserDto, res: Response): Promise<Tokens> {
    this.logger.debug('signup', AdminService.name);
    const newUser = await this.userService.create(createUserDto);
    if (!newUser) {
      throw new BadRequestException('User already exists');
    }

    const tokens = await this.getTokens(newUser.id, newUser.email);
    await this.updateRefreshToken(newUser.id, tokens.refresh_token);

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: Number(process.env.COOKIE_TIME),
      httpOnly: true,
    });
    return tokens;
  }

  // async signIn(
  //   email: string,
  //   password: string,
  //   res: Response,
  // ): Promise<Tokens> {
  //   const user = await this.prismaService.user.findUnique({
  //     where: {
  //       email: email,
  //     },
  //   });

  //   if (!user) {
  //     throw new BadRequestException('Invalid email or password');
  //   }

  //   const passwordMatch = await bcrypt.compare(password, user.hashedPassword);

  //   if (!passwordMatch) {
  //     throw new BadRequestException('Invalid email or password');
  //   }

  //   const tokens = await this.getTokens(user.id, user.email);
  //   await this.updateRefreshToken(user.id, tokens.refresh_token);

  //   res.cookie('refresh_token', tokens.refresh_token, {
  //     maxAge: Number(process.env.COOKIE_TIME),
  //     httpOnly: true,
  //   });

  //   return tokens;
  // }

  async signout(userId: number, res: Response): Promise<boolean> {
    console.log(userId);

    const user = await this.prismaService.user.updateMany({
      where: {
        id: userId,
        hashedRefreshToken: {
          not: null,
        },
      },
      data: {
        hashedRefreshToken: null,
      },
    });

    if (!user) throw new ForbiddenException('access denied');

    res.clearCookie('refresh_token');
    return true;
  }

  async refreshToken(
    userId: number,
    refreshToken: string,
    res: Response,
  ): Promise<Tokens> {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });
    if (!user || !user.hashedRefreshToken) {
      throw new ForbiddenException('Refresh token is invalid');
    }

    const tokenMatch = await bcrypt.compare(
      refreshToken,
      user.hashedRefreshToken,
    );

    if (!tokenMatch) {
      throw new ForbiddenException('Forbidden');
    }

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refresh_token);

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return tokens;
  }
  create(createAdminDto: CreateAdminDto) {
    return 'This action adds a new admin';
  }

  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
function InjectRepository(Admin: any): (target: typeof AdminService, propertyKey: undefined, parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}

