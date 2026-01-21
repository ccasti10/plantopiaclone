import { ApiProperty } from "@nestjs/swagger";
import { Producto } from "src/productos/entities/producto.entity";
import { Eficacia, MetodoAplicacion, TipoPlaga } from "./enum-control-plagas";
import { TipoProductos } from "src/productos/entities/enum-productos";

export class ControlPlagas extends Producto {

    @ApiProperty()
    public TipoPlagaControlada: TipoPlaga[];

    @ApiProperty()
    public composicion: string;


    @ApiProperty()
    public metodoAplicacion: MetodoAplicacion[];
    @ApiProperty()
    public frecuenciaAplicacion: string;

    @ApiProperty()
    public precauciones: string;
    @ApiProperty()
    public eficacia: Eficacia;

    @ApiProperty()
    public Toxicidad: boolean;

    constructor(idProducto: number, nombreProducto: string, imagenProducto: string[],
        descuento: number, precioNormal: number, coberturaDeDespacho: string[],
        stock: number, descripcionProducto: string, idCategoria: TipoProductos,
        valoracion: number, cantidadVentas: number, codigoProducto: string,
        tipoPlagaControlada:TipoPlaga[],composicion:string,metodoAplicacion:MetodoAplicacion[],
        frecuenciaAplicacion: string,precauciones: string,eficacia: Eficacia,Toxicidad: boolean) {
        super(idProducto, nombreProducto, imagenProducto,
            descuento, precioNormal, coberturaDeDespacho,
            stock, descripcionProducto, idCategoria,
            valoracion, cantidadVentas, codigoProducto);
        this.TipoPlagaControlada = tipoPlagaControlada;
        this.composicion = composicion;
        this.metodoAplicacion = metodoAplicacion;
        this.frecuenciaAplicacion = frecuenciaAplicacion;
        this.precauciones = precauciones;
        this.eficacia = eficacia;
        this.Toxicidad = Toxicidad;
    }
}

