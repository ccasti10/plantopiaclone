import { CreateOrdenCompraDto } from '../dto/create-orden-compra.dto';
import { UpdateOrdenCompraDto } from '../dto/update-orden-compra.dto';
import { OrdenCompra } from '../entities/orden-compra.entity';
import { ProductosService } from 'src/productos/service/productos.service';
import { DetalleOrdenComprasService } from 'src/detalle-orden-compras/service/detalle-orden-compras.service';
export declare class OrdenComprasService {
    private readonly productoServices;
    private readonly detalleOrdenServices;
    ordenesCompras: OrdenCompra[];
    fechaHoy: Date;
    fechaActual: string;
    constructor(productoServices: ProductosService, detalleOrdenServices: DetalleOrdenComprasService);
    create(createOrdenCompraDto: CreateOrdenCompraDto): string;
    findAll(): OrdenCompra[];
    findOne(id: number): string;
    update(id: number, updateOrdenCompraDto: UpdateOrdenCompraDto): string;
    remove(id: number): string;
}
