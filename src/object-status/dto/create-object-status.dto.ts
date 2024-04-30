import { IsNotEmpty, IsString } from "class-validator";



export class CreateObjectStatusDto {
    @IsNotEmpty()
    @IsString()
    readonly name:string
}
