import { IsBoolean, IsInt, IsString, IsDateString } from 'class-validator';

export class CreateBuildingCharacterDto {

  @IsDateString()
  building_year: Date;

  @IsBoolean()
  is_gas: boolean;

  @IsBoolean()
  is_electric: boolean;

  @IsInt()
  passenger_elevators_count: number;

  @IsInt()
  freight_elevators_count: number;

  @IsBoolean()
  is_building_security: boolean;

  @IsString()
  is_demolition_planned: string;
}

