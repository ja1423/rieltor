import { IsNotEmpty, IsString } from "class-validator";

export class CreateObjectTypeDto {
    @IsNotEmpty()
    @IsString()
    readonly name:string
}
