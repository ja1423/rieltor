import { Module } from '@nestjs/common';
import { BuildingCharacterService } from './building-character.service';
import { BuildingCharacterController } from './building-character.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[
    PrismaModule
  ],
  controllers: [BuildingCharacterController],
  providers: [BuildingCharacterService],
})
export class BuildingCharacterModule {}
