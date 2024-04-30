import { IsNotEmpty, IsString } from "class-validator";

export class CreateResidenceTypeDto {
    @IsNotEmpty()
    @IsString()
    readonly name:string
}
