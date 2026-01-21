import { ApiProperty } from "@nestjs/swagger";
import { Producto } from "src/productos/entities/producto.entity";
import { FormaMacetero } from "./enum-macetero";
import { TipoProductos } from "src/productos/entities/enum-productos";

export class Macetero extends Producto {
    @ApiProperty()
    public alto: number;

    @ApiProperty()
    public ancho: number;

    @ApiProperty()
    public peso: number;

    @ApiProperty()
    public capacidad: number;

    @ApiProperty()
    public material: string;

    @ApiProperty()
    public color: string;

    @ApiProperty()
    public forma: FormaMacetero;
    constructor(idProducto: number, nombreProducto: string, imagenProducto: string[],
        descuento: number, precioNormal: number, coberturaDeDespacho: string[],
        stock: number, descripcionProducto: string, idCategoria: TipoProductos,
        valoracion: number, cantidadVentas: number, codigoProducto: string,
        alto: number, ancho: number, peso: number,
        capacidad: number, material: string,
        color: string, forma: FormaMacetero) {
        super(idProducto, nombreProducto, imagenProducto,
            descuento, precioNormal, coberturaDeDespacho,
            stock, descripcionProducto, idCategoria,
            valoracion, cantidadVentas, codigoProducto);
        this.alto = alto;
        this.ancho = ancho;
        this.peso = peso;
        this.capacidad = capacidad;
        this.material = material;
        this.color = color;
        this.forma = forma;
    }
}


