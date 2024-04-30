import { PartialType } from '@nestjs/mapped-types';
import { CreateRelationshiptypeDto } from './create-relationshiptype.dto';

export class UpdateRelationshiptypeDto extends PartialType(CreateRelationshiptypeDto) {}
