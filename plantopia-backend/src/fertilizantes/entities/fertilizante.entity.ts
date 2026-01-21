import { ApiProperty } from '@nestjs/swagger';
import { Producto } from 'src/productos/entities/producto.entity';
import { TipoFertizante, TipoPlantasRecomendadas } from './enum-fertilizantes';
import { TipoProductos } from 'src/productos/entities/enum-productos';

export class Fertilizante extends Producto {

  @ApiProperty()
  public composición: string;
  @ApiProperty()
  public tipo: TipoFertizante;
  @ApiProperty()
  public frecuenciaAplicacion: string;
  @ApiProperty()
  public presentacion: string;
  @ApiProperty()
  public observaciones: string;
  @ApiProperty()
  public tiposPlantasRecomendadas: TipoPlantasRecomendadas;

  constructor(
    idProducto: number,
    nombreProducto: string,
    imagenProducto: string[],
    descuento: number,
    precioNormal: number,
    coberturaDeDespacho: string[],
    stock: number,
    descripcionProducto: string,
    idCategoria: TipoProductos,
    valoracion: number,
    cantidadVentas: number,
    codigoProducto: string,
    composición: string,
    tipo: TipoFertizante,
    frecuenciaAplicacion: string,
    presentacion: string,
    observaciones: string,
    tiposPlantasRecomendadas: TipoPlantasRecomendadas,
  ) {
    super(
      idProducto,
      nombreProducto,
      imagenProducto,
      descuento,
      precioNormal,
      coberturaDeDespacho,
      stock,
      descripcionProducto,
      idCategoria,
      valoracion,
      cantidadVentas,
      codigoProducto,
    );

    this.composición = composición;
    this.tipo = tipo;
    this.frecuenciaAplicacion = frecuenciaAplicacion;
    this.presentacion = presentacion;
    this.observaciones = observaciones;
    this.tiposPlantasRecomendadas = tiposPlantasRecomendadas;
  }
}
