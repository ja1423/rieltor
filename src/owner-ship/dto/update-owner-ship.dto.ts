import { PartialType } from '@nestjs/mapped-types';
import { CreateOwnerShipDto } from './create-owner-ship.dto';

export class UpdateOwnerShipDto extends PartialType(CreateOwnerShipDto) {}
