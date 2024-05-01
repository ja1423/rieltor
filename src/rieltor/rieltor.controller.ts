import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RieltorService } from './rieltor.service';
import { CreateRieltorDto } from './dto/create-rieltor.dto';
import { UpdateRieltorDto } from './dto/update-rieltor.dto';

@Controller('rieltor')
export class RieltorController {
  constructor(private readonly rieltorService: RieltorService) {}

  @Post()
  create(@Body() createRieltorDto: CreateRieltorDto) {
    return this.rieltorService.create(createRieltorDto);
  }

  @Get()
  findAll() {
    return this.rieltorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rieltorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRieltorDto: UpdateRieltorDto) {
    return this.rieltorService.update(+id, updateRieltorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rieltorService.remove(+id);
  }
}
