import { PartialType } from '@nestjs/swagger';
import { CreatePlantaCuidadoDto } from './create-planta-cuidado.dto';

export class UpdatePlantaCuidadoDto extends PartialType(CreatePlantaCuidadoDto) {}
