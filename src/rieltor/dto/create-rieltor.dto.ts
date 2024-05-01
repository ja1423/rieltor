import { IsBoolean, IsDateString, IsString } from 'class-validator';
export class CreateRieltorDto {

  @IsBoolean()
  is_active: boolean;

  @IsDateString()
  reg_date: Date;

  @IsDateString()
  deactivated_date: Date;

  @IsString()
  photo: string;

  @IsString()
  login: string;

  @IsString()
 
  password: string;
}

