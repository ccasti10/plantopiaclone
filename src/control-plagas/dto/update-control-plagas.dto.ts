import { PartialType } from '@nestjs/swagger';
import { CreateControlPlagasDto } from './create-control-plagas.dto';

export class UpdateControlPlagasDto extends PartialType(CreateControlPlagasDto) {}
