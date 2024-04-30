import { Module } from '@nestjs/common';
import { OwnershipService } from './owner-ship.service';
import { OwnerShipController } from './owner-ship.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [OwnerShipController],
  providers: [OwnershipService],
})
export class OwnerShipModule {}
