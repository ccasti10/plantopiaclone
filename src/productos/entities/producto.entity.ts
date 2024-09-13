import { ApiProperty } from '@nestjs/swagger';
import { TipoProductos } from './enum-productos';
export class Producto {
  @ApiProperty()
  public idProducto: number;

  @ApiProperty()
  public nombreProducto: string;

  @ApiProperty()
  public imagenProducto: string[];

  @ApiProperty()
  public descuento: number;

  @ApiProperty()
  public precioNormal: number;

  @ApiProperty()
  public coberturaDeDespacho: string[];

  @ApiProperty()
  public stock: number;

  @ApiProperty()
  public descripcionProducto: string;

  @ApiProperty()
  public categoria: TipoProductos;

  @ApiProperty()
  public valoracion: number;

  @ApiProperty()
  public cantidadVentas: number;

  @ApiProperty()
  public codigoProducto: string;

  constructor(
    idProducto: number,
    nombreProducto: string,
    imagenProducto: string[],
    descuento: number,
    precioNormal: number,
    coberturaDeDespacho: string[],
    stock: number,
    descripcionProducto: string,
    categoria: TipoProductos,
    valoracion: number,
    cantidadVentas: number,
    codigoProducto: string,
  ) {
    this.idProducto = idProducto;
    this.nombreProducto = nombreProducto;
    this.imagenProducto = imagenProducto;
    this.descuento = descuento;
    this.precioNormal = precioNormal;
    this.coberturaDeDespacho = coberturaDeDespacho;
    this.stock = stock;
    this.descripcionProducto = descripcionProducto;
    this.categoria = categoria;
    this.valoracion = valoracion;
    this.cantidadVentas = cantidadVentas;
    this.codigoProducto = codigoProducto;
  }
}
