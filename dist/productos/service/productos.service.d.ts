import { Macetero } from 'src/maceteros/entities/macetero.entity';
import { CreateMaceteroDto } from 'src/maceteros/dto/create-macetero.dto';
import { Producto } from '../entities/producto.entity';
import { TipoProductos } from '../entities/enum-productos';
import { MaceterosService } from 'src/maceteros/service/maceteros.service';
export declare class ProductosService {
    private readonly servicioMaceteros;
    productos: Producto[];
    constructor(servicioMaceteros: MaceterosService);
    findAll(): Producto[];
    findbyType(categoria: TipoProductos): Macetero[];
    obtCantidadProductos(): number;
    createMacetero(createMaceteroDto: CreateMaceteroDto): Macetero;
    findOne(codigoProducto: string): Macetero;
    bestSellers(): Producto[];
    findOneID(id: number): Producto[];
}
