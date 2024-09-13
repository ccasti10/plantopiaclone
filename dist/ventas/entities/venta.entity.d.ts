import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Producto } from 'src/productos/entities/producto.entity';
export declare class Venta {
    idventa: number;
    idproducto: Producto[];
    cantidad: number[];
    total: number;
    fecha: Date;
    totaldescto: number;
    rutcliente: Usuario;
    estado: string;
}
