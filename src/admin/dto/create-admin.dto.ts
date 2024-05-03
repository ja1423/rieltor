import { IsBoolean, IsString } from "class-validator";

export class CreateAdminDto {
  @IsString()
  full_name: string;
  @IsBoolean()
  is_creator: boolean;
  @IsBoolean()
  is_active: boolean;

  @IsString()
  hashed_refresh_token: string;

  @IsString()
  hashed_password: string;

  @IsString()
  email: string;

  @IsString()
  phone_number: string;

  @IsString()
  password: string;
}
