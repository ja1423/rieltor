import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoomTypeDto {
    @IsNotEmpty()
    @IsString()
    readonly name:string
}
