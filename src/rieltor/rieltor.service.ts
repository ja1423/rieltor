import { Injectable } from '@nestjs/common';
import { CreateRieltorDto } from './dto/create-rieltor.dto';
import { UpdateRieltorDto } from './dto/update-rieltor.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RieltorService {
  constructor(private readonly prismaService: PrismaService) {}
ƒ
  create(createrealtorDto: CreateRieltorDto) {
    return this.prismaService.realtor.create({
      data: createrealtorDto,
    });
  }

  findAll() {
    return this.prismaService.realtor.findMany();
  }

  findOne(id: number) {
    return this.prismaService.realtor.findUnique({
      where: { id },
    });
  }

  update(id: number, updaterealtorDto: UpdateRieltorDto) {
    return this.prismaService.realtor.update({
      where: { id },
      data: updaterealtorDto,
    });
  }

  remove(id: number) {
    return this.prismaService.realtor.delete({
      where: { id },
    });
  }
}
