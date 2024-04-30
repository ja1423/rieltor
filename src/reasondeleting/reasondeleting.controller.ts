import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReasondeletingService } from './reasondeleting.service';
import { CreateReasondeletingDto } from './dto/create-reasondeleting.dto';
import { UpdateReasondeletingDto } from './dto/update-reasondeleting.dto';

@Controller('reasondeleting')
export class ReasondeletingController {
  constructor(private readonly reasondeletingService: ReasondeletingService) {}

  @Post()
  create(@Body() createReasondeletingDto: CreateReasondeletingDto) {
    return this.reasondeletingService.create(createReasondeletingDto);
  }

  @Get()
  findAll() {
    return this.reasondeletingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reasondeletingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReasondeletingDto: UpdateReasondeletingDto) {
    return this.reasondeletingService.update(+id, updateReasondeletingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reasondeletingService.remove(+id);
  }
}
