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
    example: ['Turba'],
    description: 'Composición del sustrato',
  })
  @IsArray()
  @IsEnum(ComposicionSustrato, { each: true })
  @IsNotEmpty()
  public composicion: ComposicionSustrato[];

  @ApiProperty({
    name: 'textura',
    example: ['Ligero'],
    description: 'Textura del sustrato',
  })
  @IsArray()
  @IsEnum(TexturaSustrato, { each: true })
  @IsNotEmpty()
  public textura: TexturaSustrato[];

  @ApiProperty({
    name: 'retencionDeHumedad',
    example: 'Media',
    description: 'Retención de humedad del sustrato',
  })
  @IsEnum(RetencionHumedad)
  @IsNotEmpty()
  public retencionDeHumedad: RetencionHumedad;

  @ApiProperty({
    name: 'drenaje',
    example: 'Bueno',
    description: 'Drenaje del sustrato',
  })
  @IsString()
  @IsNotEmpty()
  public drenaje: string;

  @ApiProperty({
    name: 'plantasRecomendadas',
    enum: TipoPlantasRecomendadas,
    example: TipoPlantasRecomendadas.PLANTAS_INTERIOR,
    description: 'Tipo de plantas recomendadas',
  })
  @IsEnum(TipoPlantasRecomendadas)
  @IsNotEmpty()
  public plantasRecomendadas: TipoPlantasRecomendadas;

  @ApiProperty({
    name: 'observaciones',
    example:
      'Ideal para plantas de interior que necesitan un buen equilibrio entre retención de humedad y drenaje.',
    description: 'Observaciones del sustrato',
  })
  @IsString()
  @IsOptional()
  public observaciones: string;
  
}
