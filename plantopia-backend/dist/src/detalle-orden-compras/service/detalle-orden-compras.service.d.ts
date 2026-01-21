import { CreateDetalleOrdenCompraDto } from '../dto/create-detalle-orden-compra.dto';
import { UpdateDetalleOrdenCompraDto } from '../dto/update-detalle-orden-compra.dto';
import { DetalleOrdenCompra } from '../entities/detalle-orden-compra.entity';
export declare class DetalleOrdenComprasService {
    detalleOrdenes: DetalleOrdenCompra[];
    create(createDetalleOrdenCompraDto: CreateDetalleOrdenCompraDto): void;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDetalleOrdenCompraDto: UpdateDetalleOrdenCompraDto): string;
    remove(id: number): string;
}
