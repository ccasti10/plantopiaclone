import { PartialType } from '@nestjs/swagger';
import { CreatePlantaDto } from './create-planta.dto';

export class UpdatePlantaDto extends PartialType(CreatePlantaDto) {}
