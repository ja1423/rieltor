import { Injectable } from '@nestjs/common';
import { CreateRelationshiptypeDto } from './dto/create-relationshiptype.dto';
import { UpdateRelationshiptypeDto } from './dto/update-relationshiptype.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RelationshipTypeService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createRelationshipTypeDto: CreateRelationshiptypeDto) {
    return this.prismaService.relationshipType.create({
      data: {
        
        name: createRelationshipTypeDto.name,
       
      },
    });
  }

  findAll() {
    return this.prismaService.relationshipType.findMany();
  }

  findOne(id: number) {
    return this.prismaService.relationshipType.findUnique({
      where: { id },
    });
  }

  update(id: number, updateRelationshipTypeDto: UpdateRelationshiptypeDto) {
    return this.prismaService.relationshipType.update({
      where: { id },
      data: updateRelationshipTypeDto,
    });
  }

  remove(id: number) {
    return this.prismaService.relationshipType.delete({
      where: { id },
    });
  }
}
