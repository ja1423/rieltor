import { Module } from '@nestjs/common';
import { WindowSideService } from './window-side.service';
import { WindowSideController } from './window-side.controller';

@Module({
  controllers: [WindowSideController],
  providers: [WindowSideService],
})
export class WindowSideModule {}
