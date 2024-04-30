import { IsNotEmpty, IsString } from "class-validator";

export class CreateOwnerCooperationDto {
    @IsNotEmpty()
    @IsString()
    readonly name:string
}
