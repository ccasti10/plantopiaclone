import { PartialType } from '@nestjs/mapped-types';
import { CreateDespachoDto } from './create-despacho.dto';

export class UpdateDespachoDto extends PartialType(CreateDespachoDto) {}
