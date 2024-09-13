import { CreateOrdenCompraDto } from '../dto/create-orden-compra.dto';
import { Response } from 'express';
import { OrdenComprasService } from '../service/orden-compras.service';
export declare class OrdenComprasController {
    private readonly ordenComprasService;
    constructor(ordenComprasService: OrdenComprasService);
    create(CreateOrdenCompraDto: CreateOrdenCompraDto, res: Response): void;
    findAll(): import("../entities/orden-compra.entity").OrdenCompra[];
}
