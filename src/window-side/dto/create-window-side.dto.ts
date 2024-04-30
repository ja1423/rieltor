import { IsNotEmpty, IsString } from "class-validator";

export class CreateWindowSideDto {
    @IsNotEmpty()
    @IsString()
    readonly name:string
}
