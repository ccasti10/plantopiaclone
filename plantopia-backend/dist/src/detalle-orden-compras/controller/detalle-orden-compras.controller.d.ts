import { DetalleOrdenComprasService } from '../service/detalle-orden-compras.service';
import { CreateDetalleOrdenCompraDto } from '../dto/create-detalle-orden-compra.dto';
import { UpdateDetalleOrdenCompraDto } from '../dto/update-detalle-orden-compra.dto';
export declare class DetalleOrdenComprasController {
    private readonly detalleOrdenComprasService;
    constructor(detalleOrdenComprasService: DetalleOrdenComprasService);
    create(createDetalleOrdenCompraDto: CreateDetalleOrdenCompraDto): void;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDetalleOrdenCompraDto: UpdateDetalleOrdenCompraDto): string;
    remove(id: string): string;
}
