import { IsNotEmpty, IsString } from "class-validator";

export class CreateRenovationDto {
    @IsNotEmpty()
    @IsString()
    readonly name:string
}
