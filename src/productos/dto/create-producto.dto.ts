import { ApiProperty } from '@nestjs/swagger';
import { TipoProductos } from '../entities/enum-productos';
import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';
export class CreateProductoDto {
  /* @ApiProperty({
    name:'id Producto',
    description: 'Id Producto',
    example: '0',
  })
  public idProducto:number;*/

  @ApiProperty({
    name: 'nombreProducto',
    description: 'Nombre del Producto',
    example: 'nomnbre producto',
  })
  @IsString()
  @IsNotEmpty({ message: 'No puede estar vacio el nombre del producto' })
  public nombreProducto: string;

  @ApiProperty({
    name: 'imagenProducto',
    description: 'URL de la imagen del producto',
    example: [
      'http://example.com/imagen_1.jpg',
      'http://example.com/imagen_1_d.jpg',
    ],
  })
  @IsArray()
  @ArrayNotEmpty({ message: 'No puede estar vacio la imagen del producto' })
  @IsString({ each: true })
  public imagenProducto: string[];

  @ApiProperty({
    name: 'descuento',
    description: 'descuento en el precio del producto',
    example: 0,
    default: 0,
  })
  @IsNumber()
  @Min(0, { message: 'El descuento debe ser al menos 0' })
  public descuento?: number;

  @ApiProperty({
    name: 'precioNormal',
    description: 'Precio normal del producto sin descuento',
    example: 50000,
  })
  @IsNumber()
  @Min(1000, { message: 'El valor del producto debe ser al menos 1000' })
  public precioNormal: number;
  @ApiProperty({
    name: 'coberturaDeDespacho',
    description: 'cobertura despacho producto',
    example: ['Region Metropolitana', 'Region Valparaiso'],
  })
  @IsArray()
  public coberturaDeDespacho: string[];

  @ApiProperty({
    name: 'stock',
    description: 'Cantidad de stock disponible',
    example: 100,
  })
  @IsNumber()
  @Min(1, { message: 'El stock del producto debe ser al menos 1' })
  public stock: number;

  @ApiProperty({
    name: 'descripcionProducto',
    description: 'breve descripcion del producto',
    example: 'Plan especial para decorarar depto.',
  })
  @IsString()
  public descripcionProducto: string;
  @ApiProperty({
    name: 'categoria',
    description: 'Enum Tipo Producto',
    enum: TipoProductos,
    example: TipoProductos.Macetero,
  })
  @IsEnum(TipoProductos, {
    message: 'El valor debe ser una tipo de producto válido',
  })
  public categoria: TipoProductos; // Propiedad tipo `number`

  /*@ApiProperty({
    name:'valoracion',
    description: 'valoracion del Producto',
    example: 0,
  })
  public valoracion: number = 0;
  @ApiProperty({
    name:'cantidadVentas',
    description: 'cantidad ventas productos',
    example: 0,
  })
  public cantidadVentas: number = 0;*/
  /*  @ApiProperty({
    name:'codigoProducto',
    description: 'codigo del producto',
    example: 'MA1',
  })
  public codigoProducto: string*/
}
