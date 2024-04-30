import { Injectable } from '@nestjs/common';
import { CreateReasondeletingDto } from './dto/create-reasondeleting.dto';
import { UpdateReasondeletingDto } from './dto/update-reasondeleting.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReasonDeletingService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createReasonDeletingDto: CreateReasondeletingDto) {
    return this.prismaService.reasonDeleting.create({
      data: {
      
        name: createReasonDeletingDto.name,
       
      },
    });
  }

  findAll() {
    return this.prismaService.reasonDeleting.findMany();
  }

  findOne(id: number) {
    return this.prismaService.reasonDeleting.findUnique({
      where: { id },
    });
  }

  update(id: number, updateReasonDeletingDto: UpdateReasondeletingDto) {
    return this.prismaService.reasonDeleting.update({
      where: { id },
      data: updateReasonDeletingDto,
    });
  }

  remove(id: number) {
    return this.prismaService.reasonDeleting.delete({
      where: { id },
    });
  }
}
