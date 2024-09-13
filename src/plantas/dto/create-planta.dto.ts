import { ApiProperty } from "@nestjs/swagger";
import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { DificultadDeCuidado, Estacion, FrecuenciaDeRiego, Habitat, LuzRequerida, NivelDeHumedad, TipoDeSuelo } from "../entities/enum-plantas";
import { IsArray, IsBoolean, IsEnum, IsInt } from "class-validator";
import { TipoProductos } from "src/productos/entities/enum-productos";

export class CreatePlantaDto extends CreateProductoDto {
  @ApiProperty({
    name: 'categoria',
    description: 'Enum Tipo Producto',   
    enum: TipoProductos, example: TipoProductos.Planta
  })
  public categoria: TipoProductos; 
 
  @IsEnum(Habitat)
  @ApiProperty({
    description: 'habitat',
    enum: Habitat,
    example: Habitat.CUALQUIERA,
  })
  public habitat: Habitat;
  @IsEnum(LuzRequerida)
  @ApiProperty({
    description: 'Cantidad de luz requerida',
    enum: LuzRequerida,
    example: LuzRequerida.ALTA,
  })
  public luz: LuzRequerida;
  
  @IsEnum(FrecuenciaDeRiego)
  @ApiProperty({
    description: 'Frecuencia de riego',
    enum: FrecuenciaDeRiego,
    example: FrecuenciaDeRiego.SEMANAL,
  })
  public frecuenciaDeRiego: FrecuenciaDeRiego;

  @IsEnum(NivelDeHumedad)
  @ApiProperty({
    description: 'Nivel de humedad ideal',
    enum: NivelDeHumedad,
    example: NivelDeHumedad.ALTA,
  })
  public humedadIdeal: NivelDeHumedad;

  @IsInt()
  @ApiProperty({
    description: 'Temperatura Ideal en Grados Celcius',
    example: 25,
  })
  public temperaturaIdeal: number;

  @IsBoolean()
  @ApiProperty({
    description: 'Toxicidad para Mascotas',
    example: true,
  })
  public toxicidadMascotas: boolean;
  
  @IsInt()
  @ApiProperty({
    description: 'Tamaño Máximo Planta en centimetros',
    example: 80
  })
  public tamanoMaximo: number;

  @IsEnum(TipoDeSuelo)
  @ApiProperty({
    description: 'Tipo de suelo',
    enum: TipoDeSuelo,
    example: TipoDeSuelo.ARENOSO,
  })
  public tipoSuelo: TipoDeSuelo;

  @IsEnum(DificultadDeCuidado)
  @ApiProperty({
    description: 'Dificultad de cuidado',
    enum: DificultadDeCuidado,
    example: DificultadDeCuidado.BAJA,
  })
  public dificultadDeCuidado: DificultadDeCuidado;

  @IsEnum(Estacion)
  @ApiProperty({
    description: 'Estación de mayor crecimiento',
    enum: Estacion,
    example: Estacion.PRIMAVERA,
  })
  public estacion: Estacion;

  @IsArray()
  //@IsInt()
  @ApiProperty({
    isArray: true,
    description: 'Lista de Id Fertilizantes Sugeridos',
    example: [2],
    default: null
  })
  public fertilizantesSugeridos: number[];

  @IsArray()
  //@IsInt()
  @ApiProperty({
    isArray: true,
    description: 'Lista de Id Sustratos Sugeridos',
    example: [3],
    default: null
  })
  public sustratosSugeridos: number[];

  

}
