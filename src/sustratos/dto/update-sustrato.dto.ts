import { PartialType } from '@nestjs/swagger';
import { CreateSustratoDto } from './create-sustrato.dto';

export class UpdateSustratoDto extends PartialType(CreateSustratoDto) {}
