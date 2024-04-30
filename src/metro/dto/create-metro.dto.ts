import { IsNotEmpty, IsString } from "class-validator";

export class CreateMetroDto {
    @IsNotEmpty()
    @IsString()
    readonly name:string
}
