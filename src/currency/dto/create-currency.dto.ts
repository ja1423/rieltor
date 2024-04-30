import { IsNotEmpty, IsString } from "class-validator";

export class CreateCurrencyDto {
    @IsNotEmpty()
    @IsString()
    readonly name:string
}
