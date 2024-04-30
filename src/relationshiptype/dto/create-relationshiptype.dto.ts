import { IsNotEmpty, IsString } from "class-validator";

export class CreateRelationshiptypeDto {
    @IsNotEmpty()
    @IsString()
    readonly name:string
}
