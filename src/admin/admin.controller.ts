import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Response } from 'express';
import { Tokens } from './types';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('signup')
  async signUp(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<Tokens> {
    return this.adminService.signUp(createUserDto, res);
  }

  // @Post('signin')
  // async signIn(
  //   @Body() signInDto: SignInDto,
  //   @Res({ passthrough: true }) res: Response,
  // ): Promise<Tokens> {
  //   const { email, password } = signInDto;
  //   return this.adminService.signIn(email, password, res);
  // }

  // @Post('signout')

  // logout(
  //   @GetCurrentUserId() userId: number,
  //   // @CookieGetter('refresh_token') refreshToken: string,
  //   @Res({ passthrough: true }) res: Response,
  // ) {
  //   return this.adminService.signout( res);
  // }

  @Post(':id/refresh')
  async refresh(
    
    @Res({ passthrough: true }) res: Response,
  ): Promise<Tokens> {
    return this.adminService.refreshToken(+userId, refreshToken, res);
  }

  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
