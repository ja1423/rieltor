import { PartialType } from '@nestjs/mapped-types';
import { CreateReasondeletingDto } from './create-reasondeleting.dto';

export class UpdateReasondeletingDto extends PartialType(CreateReasondeletingDto) {}
