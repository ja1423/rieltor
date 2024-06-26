import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AddressService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createAddressDto: CreateAddressDto) {
    return this.prismaService.address.create({
      data: createAddressDto,
    });
  }

  findAll() {
    return this.prismaService.address.findMany();
  }

  findOne(id: number) {
    return this.prismaService.address.findUnique({
      where: { id },
    });
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return this.prismaService.address.update({
      where: { id },
      data: updateAddressDto,
    });
  }

  remove(id: number) {
    return this.prismaService.address.delete({
      where: { id },
    });
  }
}
