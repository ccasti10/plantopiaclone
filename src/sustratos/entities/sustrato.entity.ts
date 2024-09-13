import { Producto } from 'src/productos/entities/producto.entity';
import {
  ComposicionSustrato,
  TexturaSustrato,
} from './enum-sustratos';
import { ApiProperty } from '@nestjs/swagger';
import { TipoPlantasRecomendadas } from 'src/fertilizantes/entities/enum-fertilizantes';
import { TipoProductos } from 'src/productos/entities/enum-productos';


export class Sustrato extends Producto {
  @ApiProperty()
  public composicion: ComposicionSustrato[];

  @ApiProperty()
  public textura: TexturaSustrato[];

  @ApiProperty()
  public drenaje: string;

  @ApiProperty()
  public  plantasRecomendadas: TipoPlantasRecomendadas;

  @ApiProperty()
  public observaciones: string;

  constructor(idProducto: number, nombreProducto: string, imagenProducto: string[],
    descuento: number, precioNormal: number, coberturaDeDespacho: string[],
    stock: number, descripcionProducto: string, idCategoria: TipoProductos,
    valoracion: number, cantidadVentas: number, codigoProducto: string,
    composicion: ComposicionSustrato[], textura: TexturaSustrato[], drenaje: string,
     plantasRecomendadas: TipoPlantasRecomendadas,observaciones:string) {
    super(idProducto, nombreProducto, imagenProducto,
        descuento, precioNormal, coberturaDeDespacho,
        stock, descripcionProducto, idCategoria,
        valoracion, cantidadVentas, codigoProducto);
    this.composicion = composicion;
    this.textura = textura;
    this.drenaje = drenaje;
    this.plantasRecomendadas = plantasRecomendadas;
    this.observaciones= observaciones;
    
}
}
