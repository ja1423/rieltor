import { Module } from '@nestjs/common';
import { RelationshipTypeService } from './relationshiptype.service';
import { RelationshiptypeController } from './relationshiptype.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [RelationshiptypeController],
  providers: [RelationshipTypeService],
})
export class RelationshiptypeModule {}
