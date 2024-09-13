import { PartialType } from '@nestjs/swagger';
import { CreateDetalleOrdenCompraDto } from './create-detalle-orden-compra.dto';

export class UpdateDetalleOrdenCompraDto extends PartialType(CreateDetalleOrdenCompraDto) {}
