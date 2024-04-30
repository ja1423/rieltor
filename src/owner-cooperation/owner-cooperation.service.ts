import { Injectable } from '@nestjs/common';
import { CreateOwnerCooperationDto } from './dto/create-owner-cooperation.dto';
import { UpdateOwnerCooperationDto } from './dto/update-owner-cooperation.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OwnerCooperationService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createOwnerCooperationDto: CreateOwnerCooperationDto) {
    return this.prismaService.ownerCoorporation.create({
      data: {
     
        name: createOwnerCooperationDto.name,
       
      },
    });
  }

  findAll() {
    return this.prismaService.ownerCoorporation.findMany();
  }

  findOne(id: number) {
    return this.prismaService.ownerCoorporation.findUnique({
      where: { id },
    });
  }

  update(id: number, updateOwnerCooperationDto: UpdateOwnerCooperationDto) {
    return this.prismaService.ownerCoorporation.update({
      where: { id },
      data: updateOwnerCooperationDto,
    });
  }

  remove(id: number) {
    return this.prismaService.ownerCoorporation.delete({
      where: { id },
    });
  }
}
