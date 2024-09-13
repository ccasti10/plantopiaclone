import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { ComposicionControlPlaga, Eficacia, MetodoAplicacion, TipoPlaga } from "../entities/enum-control-plagas";
export declare class CreateControlPlagasDto extends CreateProductoDto {
    nombreProducto: string;
    stock: number;
    precio: number;
    imagen: string;
    TipoPlagaControlada: TipoPlaga[];
    composicion: ComposicionControlPlaga[];
    metodoAplicacion: MetodoAplicacion[];
    frecuenciaAplicacion: string;
    precauciones: string;
    eficacia: Eficacia;
}
