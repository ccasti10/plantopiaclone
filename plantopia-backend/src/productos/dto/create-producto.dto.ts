import { ApiProperty } from '@nestjs/swagger';
import { TipoProductos } from '../entities/enum-productos';
import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
export class CreateProductoDto {
  /*type: 'string', 
  
  description: 'Categoría del Producto', 
  required: true,
  maxLength: 80,  
  nullable: false,
  example: 'Alimento Seco Perros'}*/

  @ApiProperty({
    name: 'nombreProducto',
    description: 'Nombre del Producto',
    example:'Girasol',
    required: true,
    type: 'string', 
    maxLength:60,
    nullable:false
  })
  @IsString({ message: 'El nombre producto debe ser texto' })
  @IsNotEmpty({ message: 'El nombre producto es campo obligatorio' })
  @MaxLength(60, { message: 'El nombre del producto no puede tener más de 60 caracteres' })
  public nombreProducto: string;

  @ApiProperty({
    name: 'imagenProducto',
    description: 'Lista de Url de la imagenes de un producto',
    example: [
      'https://example.com/imagen_1.jpg',
      'https://example.com/imagen_1_d.jpg',
    ],
    required: true,
    type: [String], 
    isArray: true,

    default:['https://imagenes/sin_imagen.png']
  })
  @IsArray({ message: 'El campo debe ser un array de URLs' })
  @ArrayNotEmpty({ message: 'La lista de URLs no puede estar vacía' })
  @IsUrl({}, { each: true, message: 'Cada URL debe ser válida' })
  public imagenProducto: string[];

  @ApiProperty({
    name: 'descuento',
    type: Number,
    description: 'descuento en el precio del producto',
    required: true,
    minimum:0,
    example: 0,
    default: 0,
    
  })
  @IsNumber({}, { message: 'El descuento debe ser un número' })
  @Min(0, { message: 'El descuento debe ser al menos 0' })
  public descuento?: number;

  @ApiProperty({
    name: 'precioNormal',
    type: Number,
    description: 'Precio normal del producto sin descuento',
    example: 50000,
    required: true,
    minimum:100,
    maximum:1000000,
  })
  @IsNumber({}, { message: 'El precio normal debe ser un número' })
  @Min(100, { message: 'El precio normal del producto debe ser al mayor igual a 100' })
  @Max(1000000, { message: 'El precio normal del producto debe ser menor igual a 1000000' })
  public precioNormal: number;

  @ApiProperty({
    name: 'coberturaDeDespacho',
    description: 'Lista de lugares de cobertura de un producto',
    example: ['Region Metropolitana', 'Region Valparaiso'],
    required: true,
    type: [String], 
    isArray: true,
  })
  @IsArray({ message: 'El campo debe ser un array de lugares' })
  @ArrayNotEmpty({ message: 'La lista de lugares no puede estar vacía' })
  public coberturaDeDespacho: string[];

  @ApiProperty({
    name: 'stock',
    type: Number,
    description: 'stock del producto sin descuento',
    example: 100,
    required: true,
    minimum:1,
    maximum:100000,
  })
  @IsNumber({}, { message: 'El stock debe ser un número' })
  @Min(1, { message: 'El stock del producto debe ser al mayor igual a 1' })
  @Max(100000, { message: 'El stock del producto debe ser menor igual a 100000' })
  public stock: number;

@ApiProperty({
  name: 'descripcionProducto',
  description: 'Descripcion Breve  del Producto',
  example:'Es una planta ornamental conocida por sus hojas frondosas y de forma delicada, que crecen en racimos y tienen una textura plumosa. Es ideal para interiores, donde añade un toque de frescura y verdor a cualquier ambiente. También puede crecer en exteriores en climas húmedos y sombreados.',
  required: true,
  type: 'string', 
  minLength:10,
  maxLength:500,
  nullable:false
})
@IsString({ message: 'Descripcion del producto debe ser texto' })
@IsNotEmpty({ message: 'Descripcion del producto es campo obligatorio' })
@MaxLength(500, { message: 'Descripcion del producto no puede tener más de 500 caracteres' })   
@MaxLength(500, { message: 'Descripcion del producto no puede tener más de 500 caracteres' })
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
