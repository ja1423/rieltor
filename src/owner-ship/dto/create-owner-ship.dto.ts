import { IsNotEmpty, IsString } from "class-validator";

export class CreateOwnerShipDto {
    @IsNotEmpty()
    @IsString()
    readonly name:string
}
