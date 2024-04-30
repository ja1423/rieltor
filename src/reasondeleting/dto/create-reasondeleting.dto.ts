import { IsNotEmpty, IsString } from "class-validator";

export class CreateReasondeletingDto {
    @IsNotEmpty()
    @IsString()
    readonly name:string
}
