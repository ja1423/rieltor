import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ObjectTypeModule } from './object-type/object-type.module';
import { ResidenceTypeModule } from './residence-type/residence-type.module';
import { ObjectCategoryModule } from './object-category/object-category.module';
import { ObjectStatusModule } from './object-status/object-status.module';
import { CurrencyModule } from './currency/currency.module';
import { RenovationModule } from './renovation/renovation.module';
import { WindowSideModule } from './window-side/window-side.module';
import { RoomTypeModule } from './room-type/room-type.module';
import { OwnerShipModule } from './owner-ship/owner-ship.module';
import { ReasondeletingModule } from './reasondeleting/reasondeleting.module';
import { OwnerCooperationModule } from './owner-cooperation/owner-cooperation.module';
import { RelationshiptypeModule } from './relationshiptype/relationshiptype.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { MetroModule } from './metro/metro.module';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ObjectTypeModule,
    ResidenceTypeModule,
    ObjectCategoryModule,
    ObjectStatusModule,
    CurrencyModule,
    RenovationModule,
    WindowSideModule,
    RoomTypeModule,
    OwnerShipModule,
    ReasondeletingModule,
    OwnerCooperationModule,
    RelationshiptypeModule,
    RegionModule,
    DistrictModule,
    MetroModule
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
