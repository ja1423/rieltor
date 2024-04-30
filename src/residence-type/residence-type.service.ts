import { Injectable } from '@nestjs/common';
import { CreateResidenceTypeDto } from './dto/create-residence-type.dto';
import { UpdateResidenceTypeDto } from './dto/update-residence-type.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ResidenceType {
  constructor(private readonly prismaService: PrismaService) {}

  create(createResidenceTypeDto: CreateResidenceTypeDto) {
    return this.prismaService.residenceType.create({
      data: {
        name: createResidenceTypeDto.name,
        
      },
    });
  }

  findAll() {
    return this.prismaService.residenceType.findMany();
  }

  findOne(id: number) {
    return this.prismaService.residenceType.findUnique({
      where: { id },
    });
  }

  update(id: number, updateResidenceTypeDto: UpdateResidenceTypeDto) {
    return this.prismaService.residenceType.update({
      where: { id },
      data: updateResidenceTypeDto,
    });
  }

  remove(id: number) {
    return this.prismaService.residenceType.delete({
      where: { id },
    });
  }
}
