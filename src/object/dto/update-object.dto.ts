import { PartialType } from '@nestjs/mapped-types';
import { CreateObjectDTO } from './create-object.dto';

export class UpdateObjectDto extends PartialType(CreateObjectDTO) {}
