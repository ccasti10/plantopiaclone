import { ApiProperty } from "@nestjs/swagger";
import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { TipoFertizante, TipoPlantasRecomendadas } from "../entities/enum-fertilizantes";
import { IsEnum, IsString } from "class-validator";
import { TipoProductos } from "src/productos/entities/enum-productos";

export class CreateFertilizanteDto extends CreateProductoDto {
  @ApiProperty({
    name: 'categoria',
    description: 'Enum Tipo Producto',
    enum: TipoProductos, example: TipoProductos.Fertilizantes
  })
  public categoria: TipoProductos;
  @IsString()
  @ApiProperty({
    description: 'Composicion (NPK)',
    example: '20-20-20'
  })
  public composición: string;
  @IsEnum(TipoFertizante)
  @ApiProperty({
    description: 'Tipo Fertilizante',
    enum: TipoFertizante, example: TipoFertizante.EQUILIBRADO_LIQUIDO,
  })
  public tipo: TipoFertizante;
  @IsString()
  @ApiProperty({
    description: 'Frecuencia Aplicacion',
    example: 'Cada 2 semanas en primavera y verano'
  })
  public frecuenciaAplicacion: string;
  @IsString()
  @ApiProperty({
    description: 'Presentacion Fertilizante',
    example: '500 cc'
  })
  public presentacion: string;
  @IsString()
  @ApiProperty({
    description: 'observaciones',
    example: ' Adecuado para plantas que requieren un balance NPK equilibrado.'
  })
  public observaciones: string;
  @IsEnum(TipoPlantasRecomendadas)
  @ApiProperty({
    description: 'Tipo Plantas Recomendadas',
    enum: TipoPlantasRecomendadas, example: TipoPlantasRecomendadas.PLANTAS_INTERIOR,
  })
  public tiposPlantasRecomendadas: TipoPlantasRecomendadas;
}
