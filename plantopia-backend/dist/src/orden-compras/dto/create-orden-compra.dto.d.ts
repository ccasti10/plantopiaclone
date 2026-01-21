import { CreateDetalleOrdenCompraDto } from "src/detalle-orden-compras/dto/create-detalle-orden-compra.dto";
export declare class CreateOrdenCompraDto {
    emailComprador: string;
    idCliente?: number;
    detalle: CreateDetalleOrdenCompraDto[];
}
