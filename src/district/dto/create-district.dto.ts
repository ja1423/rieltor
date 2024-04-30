import { IsNotEmpty, IsString } from "class-validator";

export class CreateDistrictDto {
    @IsNotEmpty()
    @IsString()
    readonly name:string
}
