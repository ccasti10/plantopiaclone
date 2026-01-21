import { ApiProperty } from '@nestjs/swagger';
import { TipoPlantasRecomendadas } from 'src/fertilizantes/entities/enum-fertilizantes';
import { CreateProductoDto } from 'src/productos/dto/create-producto.dto';
import {
  ComposicionSustrato,
  RetencionHumedad,
  TexturaSustrato,
} from '../entities/enum-sustratos';
import { TipoProductos } from 'src/productos/entities/enum-productos';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  IsArray,
  IsOptional,
  IsUrl,
  Min,
  Max,
  MaxLength,
  ArrayNotEmpty,
} from 'class-validator';

export class CreateSustratoDto extends CreateProductoDto {
  @ApiProperty({
    description: 'Categoría del producto',
    example: TipoProductos.Sustratos,
    enum: TipoProductos,
  })
  @IsEnum(TipoProductos)
  @IsNotEmpty()
  public categoria: TipoProductos.Sustratos;


  @ApiProperty({
    name: 'composicion',
    enum: ComposicionSustrato,
    example: [ComposicionSustrato.CARBON_VEGETAL],
  })
  @IsArray({ message: 'El valor debe ser un array de composicion de sustratos' })
  @ArrayNotEmpty({ message: 'La lista composicion de sustratos no puede estar vacía' })
  @IsEnum(ComposicionSustrato, { each: true, message: 'El valor debe ser una composicion sustrato valida' })
  public composicion: ComposicionSustrato[];

  @ApiProperty({
    name: 'textura',
    enum: TexturaSustrato,
    example: [TexturaSustrato.DENSO],
  })
  @IsArray({ message: 'El valor debe ser un array de texturas de sustratos' })
  @ArrayNotEmpty({ message: 'La lista composicion de texturas no puede estar vacía' })
  @IsEnum(TexturaSustrato, { each: true, message: 'El valor debe ser una textura sustrato valida' })
  public textura: TexturaSustrato[];

  @ApiProperty({
    name: 'retencionDeHumedad',
    enum: RetencionHumedad,
    example: [RetencionHumedad.MEDIA],
     description: 'Retención de humedad del sustrato',
  })
  @IsEnum(RetencionHumedad, {
    message: 'El valor debe ser una retencion válido',
  })
  public retencionDeHumedad: RetencionHumedad;


  @ApiProperty({
    name: 'drenaje',
    example: 'Bueno',
    description: 'Drenaje del sustrato',
    required: true,
    type: 'string',
    maxLength: 100,
    nullable: false
  })
  @IsString({ message: 'El drenaje debe ser texto' })
  @IsNotEmpty({ message: 'El drenaje es campo obligatorio' })
  @MaxLength(100, { message: 'Largo del drenaje debe ser menor igual a 100 caracteres' })
  public drenaje: string;

  @ApiProperty({
    name: 'plantasRecomendadas',
    enum: TipoPlantasRecomendadas,
    example: TipoPlantasRecomendadas.PLANTAS_INTERIOR,
    description: 'Tipo de plantas recomendadas',
  })
  @IsEnum(TipoPlantasRecomendadas, {
    message: 'El valor debe ser una tipo planta recomendada válida',
  })
  public plantasRecomendadas: TipoPlantasRecomendadas;

  @ApiProperty({
    name: 'observaciones',
    example:
      'Ideal para plantas de interior que necesitan un buen equilibrio entre retención de humedad y drenaje.',
    description: 'Observaciones del sustrato',
    maxLength: 500
  })
  @IsOptional()
  @IsString({ message: 'El color del macetero debe ser texto' })
  @MaxLength(500, { message: 'Largo del color del macetero de ser menor igual a 500 caracteres' })
  public observaciones: string;

}
