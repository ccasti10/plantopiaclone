import { ApiProperty } from "@nestjs/swagger";
import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { TipoFertizante, TipoPlantasRecomendadas } from "../entities/enum-fertilizantes";
import { IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { TipoProductos } from "src/productos/entities/enum-productos";

export class CreateFertilizanteDto extends CreateProductoDto {
  @ApiProperty({
    name: 'categoria',
    description: 'Enum Tipo Producto',
    enum: TipoProductos, example: TipoProductos.Fertilizantes
  })
  public categoria: TipoProductos;

  @ApiProperty({
    name: 'composición',
    description: 'Composicion (NPK)',
    example: '20-20-20',
    required: true,
    type: 'string',
    minLength: 5,
    maxLength: 200,
    nullable: false
  })
  @IsString({ message: 'La Composicion (NPK) debe ser texto' })
  @IsNotEmpty({ message: 'La Composicion (NPK) es campo obligatorio' })
  @MinLength(5, { message: 'Largo de la Composicion (NPK) debe ser mayor igual  de 5 caracteres' })
  @MaxLength(200, { message: 'Largo de la Composicion (NPK) debe ser menor igual  de 200 caracteres' })
  public composición: string;

  @IsEnum(TipoFertizante)
  @ApiProperty({
    description: 'Tipo Fertilizante',
    enum: TipoFertizante, example: TipoFertizante.EQUILIBRADO_LIQUIDO,
  })
  public tipo: TipoFertizante;

  @ApiProperty({
    name: 'frecuenciaAplicacion',
    description: 'Frecuencia Aplicacion',
    example: 'Cada 2 semanas en primavera y verano',
    required: true,
    type: 'string',
    minLength: 5,
    maxLength: 200,
    nullable: false
  })
  @IsString({ message: 'La Frecuencia Aplicacion debe ser texto' })
  @IsNotEmpty({ message: 'La Frecuencia Aplicacion es campo obligatorio' })
  @MinLength(5, { message: 'Largo de la Frecuencia Aplicacion debe ser mayor igual  de 5 caracteres' })
  @MaxLength(200, { message: 'Largo de la Frecuencia Aplicacion debe ser menor igual  de 200 caracteres' })
  public frecuenciaAplicacion: string;

  @ApiProperty({
    name: 'presentacion',
    description: 'Presentacion Fertilizante',
    example: '500 cc',
    required: true,
    type: 'string',
    minLength: 5,
    maxLength: 100,
    nullable: false
  })
  @IsString({ message: 'La presentacion del fertilizante debe ser texto' })
  @IsNotEmpty({ message: 'La presentacion del fertilizante debe ser campo obligatorio' })
  @MinLength(5, { message: 'Largo de la presentacion del fertilizante debe ser mayor igual  de 5 caracteres' })
  @MaxLength(100, { message: 'Largo de la presentacion del fertilizante debe ser menor igual  de 100 caracteres' })
  public presentacion: string;

  @ApiProperty({
    name: 'observaciones',
    description: 'observaciones',
    example: ' Adecuado para plantas que requieren un balance NPK equilibrado.',
    required: true,
    type: 'string',
    minLength: 5,
    maxLength: 100,
    nullable: false
  })
  @IsString({ message: 'Las observaciones del fertilizante debe ser texto' })
  @IsNotEmpty({ message: 'Las observaciones del fertilizante debe ser campo obligatorio' })
  @MinLength(5, { message: 'Largo de las observaciones del fertilizante debe ser mayor igual  de 5 caracteres' })
  @MaxLength(500, { message: 'Largo de las observaciones del fertilizante debe ser menor igual  de 500 caracteres' })
  public observaciones: string;

  @IsEnum(TipoPlantasRecomendadas)
  @ApiProperty({
    description: 'Tipo Plantas Recomendadas',
    enum: TipoPlantasRecomendadas, example: TipoPlantasRecomendadas.PLANTAS_INTERIOR,
  })
  public tiposPlantasRecomendadas: TipoPlantasRecomendadas;
}
