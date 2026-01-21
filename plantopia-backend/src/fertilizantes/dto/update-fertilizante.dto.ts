import { PartialType } from '@nestjs/swagger';
import { CreateFertilizanteDto } from './create-fertilizante.dto';

export class UpdateFertilizanteDto extends PartialType(CreateFertilizanteDto) {}
