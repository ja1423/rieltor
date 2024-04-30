import { IsNotEmpty, IsString } from "class-validator";

export class CreateObjectCategoryDto {
    @IsNotEmpty()
    @IsString()
    readonly name:string
}
