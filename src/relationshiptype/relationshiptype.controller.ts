import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelationshiptypeService } from './relationshiptype.service';
import { CreateRelationshiptypeDto } from './dto/create-relationshiptype.dto';
import { UpdateRelationshiptypeDto } from './dto/update-relationshiptype.dto';

@Controller('relationshiptype')
export class RelationshiptypeController {
  constructor(private readonly relationshiptypeService: RelationshiptypeService) {}

  @Post()
  create(@Body() createRelationshiptypeDto: CreateRelationshiptypeDto) {
    return this.relationshiptypeService.create(createRelationshiptypeDto);
  }

  @Get()
  findAll() {
    return this.relationshiptypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relationshiptypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRelationshiptypeDto: UpdateRelationshiptypeDto) {
    return this.relationshiptypeService.update(+id, updateRelationshiptypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relationshiptypeService.remove(+id);
  }
}
