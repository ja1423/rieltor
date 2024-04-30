import { IsNotEmpty, IsString } from "class-validator";

export class CreateRegionDto {
    @IsNotEmpty()
    @IsString()
    readonly name:string
}
