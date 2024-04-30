import { Injectable } from '@nestjs/common';
import { CreateOwnerShipDto } from './dto/create-owner-ship.dto';
import { UpdateOwnerShipDto } from './dto/update-owner-ship.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OwnershipService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createOwnershipDto: CreateOwnerShipDto) {
    return this.prismaService.ownerShip.create({
      data: {
        name: createOwnershipDto.name,
       
      },
    });
  }

  findAll() {
    return this.prismaService.ownerShip.findMany();
  }

  findOne(id: number) {
    return this.prismaService.ownerShip.findUnique({
      where: { id },
    });
  }

  update(id: number, updateOwnershipDto: UpdateOwnerShipDto) {
    return this.prismaService.ownerShip.update({
      where: { id },
      data: updateOwnershipDto,
    });
  }

  remove(id: number) {
    return this.prismaService.ownerShip.delete({
      where: { id },
    });
  }
}
