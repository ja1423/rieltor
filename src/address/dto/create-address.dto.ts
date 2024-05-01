import {
  IsInt,
  IsString,
  
} from 'class-validator';

export class CreateAddressDto {
  @IsInt()
  house_number: number;

  @IsInt()
  apartment_number: number;

  @IsString()
  location: string;

  @IsString()
  landmark: string;

  @IsString()
  location_description: string;
}
