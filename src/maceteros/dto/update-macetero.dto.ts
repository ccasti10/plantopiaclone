import { PartialType } from '@nestjs/swagger';
import { CreateMaceteroDto } from './create-macetero.dto';

export class UpdateMaceteroDto extends PartialType(CreateMaceteroDto) {}
