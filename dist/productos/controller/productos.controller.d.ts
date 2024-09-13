import { Response } from 'express';
import { CreateMaceteroDto } from 'src/maceteros/dto/create-macetero.dto';
import { ProductosService } from '../service/productos.service';
import { TipoProductos } from '../entities/enum-productos';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    bestSellers(res: Response): void;
    crearMacetero(CreateMaceteroDto: CreateMaceteroDto, res: Response): void;
    findAll(res: Response): void;
    findbyType(tipo: TipoProductos, res: Response): void;
    findOne(codigoProducto: string, res: Response): void;
}
