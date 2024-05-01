import { Injectable } from '@nestjs/common';
import { CreateObjectDTO } from './dto/create-object.dto';
import { UpdateObjectDto } from './dto/update-object.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ObjectService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createObjectDto: CreateObjectDTO) {
    return this.prismaService.object.create({
      data: createObjectDto,
    });
  }

  findAll() {
    return this.prismaService.object.findMany();
  }

  findOne(id: number) {
    return this.prismaService.object.findUnique({
      where: { id },
    });
  }

  update(id: number, updateObjectDto: UpdateObjectDto) {
    return this.prismaService.object.update({
      where: { id },
      data: updateObjectDto,
    });
  }

  remove(id: number) {
    return this.prismaService.object.delete({
      where: { id },
    });
  }
}
