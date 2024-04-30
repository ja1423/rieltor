import { Module } from '@nestjs/common';
import { ReasonDeletingService } from './reasondeleting.service';
import { ReasondeletingController } from './reasondeleting.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[
    PrismaModule
  ],
  controllers: [ReasondeletingController],
  providers: [ReasonDeletingService],
})
export class ReasondeletingModule {}
