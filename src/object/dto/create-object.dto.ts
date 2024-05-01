import { IsBoolean, IsInt, IsString, MaxLength, Min, ValidateIf } from 'class-validator';

export class CreateObjectDTO {
  @IsString()
  @MaxLength(255)
  name: string;

  @IsBoolean()
  is_studio: boolean;

  @IsInt()
  floor: number;

  @IsInt()
  floors_in_building: number;

  @IsInt()
  total_area: number;

  @IsInt()
  live_area: number;

  @IsInt()
  kitchen_area: number;

  @IsInt()
  rooms_area: number;

  @IsInt()
  @Min(0)
  price: number;

  @IsString()
  @MaxLength(255)
  price_per_square: string;

  @IsString()
  @MaxLength(255)
  price_type: string;

  @IsBoolean()
  is_apartment: boolean;

  @IsBoolean()
  is_luxury: boolean;

  @IsString()
  @MaxLength(255)
  ceiling_height: string;

  @IsString()
  @MaxLength(255)
  combined_bath_count: string;

  @IsString()
  @MaxLength(255)
  separate_bath_count: string;

  @IsString()
  @MaxLength(255)
  loggia_count: string;

  @IsString()
  @MaxLength(255)
  loggia_description: string;

  @IsString()
  @MaxLength(255)
  balcony_count: string;

  @IsString()
  @MaxLength(255)
  balcony_description: string;

  @IsString()
  @MaxLength(255)
  general_description: string;

  @IsString()
  @MaxLength(255)
  cadastr_number: string;

  @IsString()
  @MaxLength(255)
  document: string;

  @IsString()
  @MaxLength(255)
  layout: string;

  @IsString()
  @MaxLength(255)
  fotos: string;

  @IsString()
  @MaxLength(255)
  online_show: string;

  @IsString()
  @MaxLength(255)
  video: string;
}
