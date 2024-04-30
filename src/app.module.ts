import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ObjectTypeModule } from './object-type/object-type.module';
import { ResidenceTypeModule } from './residence-type/residence-type.module';
import { ObjectCategoryModule } from './object-category/object-category.module';
import { ObjectStatusModule } from './object-status/object-status.module';
import { CurrencyModule } from './currency/currency.module';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ObjectTypeModule,
    ResidenceTypeModule,
    ObjectCategoryModule,
    ObjectStatusModule,
    CurrencyModule
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
