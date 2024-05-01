import { Module } from '@nestjs/common';
import { RieltorService } from './rieltor.service';
import { RieltorController } from './rieltor.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [RieltorController],
  providers: [RieltorService],
})
export class RieltorModule {}
