import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { Eficacia, MetodoAplicacion, TipoPlaga } from "../entities/enum-control-plagas";
import { TipoProductos } from "src/productos/entities/enum-productos";
export declare class CreateControlPlagasDto extends CreateProductoDto {
    categoria: TipoProductos;
    TipoPlagaControlada: TipoPlaga[];
    composicion: string;
    metodoAplicacion: MetodoAplicacion[];
    frecuenciaAplicacion: string;
    precauciones: string;
    eficacia: Eficacia;
    Toxicidad: boolean;
}
