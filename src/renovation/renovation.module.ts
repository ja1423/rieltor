import { Module } from '@nestjs/common';
import { RenovationService } from './renovation.service';
import { RenovationController } from './renovation.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [RenovationController],
  providers: [RenovationService],
})
export class RenovationModule {}
