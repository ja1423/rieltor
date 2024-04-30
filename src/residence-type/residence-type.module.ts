import { Module } from '@nestjs/common';
import { ResidenceType } from './residence-type.service';
import { ResidenceTypeController } from './residence-type.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
imports:[PrismaModule],
  controllers: [ResidenceTypeController],
  providers: [ResidenceType],
})
export class ResidenceTypeModule {}
