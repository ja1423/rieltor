import { Injectable } from '@nestjs/common';
import { CreateObjectTypeDto } from './dto/create-object-type.dto';
import { UpdateObjectTypeDto } from './dto/update-object-type.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ObjectTypeService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createObjectTypeDto: CreateObjectTypeDto) {
    return this.prismaService.objectType.create({
      data: { name: createObjectTypeDto.name },
    });
  }

  findAll() {
    return this.prismaService.objectType.findMany();
  }

  findOne(id: number) {
    return this.prismaService.objectType.findMany({
      where: {
        id,
      },
    });
  }

  update(id: number, updateObjectTypeDto: UpdateObjectTypeDto) {
    return this.prismaService.objectType.update({
      where: {
        id,
      },
      data: updateObjectTypeDto,
    });
  }

  remove(id: number) {
    return this.prismaService.objectType.delete({
      where: {
        id,
      },
    });
  }
}
