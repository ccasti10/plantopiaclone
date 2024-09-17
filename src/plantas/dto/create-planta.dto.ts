import { ApiProperty } from "@nestjs/swagger";
import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { DificultadDeCuidado, Estacion, FrecuenciaDeRiego, Habitat, LuzRequerida, NivelDeHumedad, TipoDeSuelo } from "../entities/enum-plantas";
import { ArrayNotEmpty, IsArray, IsBoolean, IsEnum, IsInt, IsNumber, Max, Min } from "class-validator";
import { TipoProductos } from "src/productos/entities/enum-productos";

export class CreatePlantaDto extends CreateProductoDto {
  @ApiProperty({
    name: 'categoria',
    description: 'Enum Tipo Producto',   
    enum: TipoProductos, example: TipoProductos.Planta
  })
  public categoria: TipoProductos; 
 

  @ApiProperty({
    name: 'habitat',  
    description: 'Enum habitat Planta',
    enum: Habitat,
    example: Habitat.CUALQUIERA,
  })
  @IsEnum(Habitat, {
    message: 'El valor debe ser una habitat valido',
  })
  public habitat: Habitat;
 

  @ApiProperty({
    name: 'luz',  
    description: 'Enum Cantidad de luz requerida',
    enum: LuzRequerida,
    example: LuzRequerida.ALTA,
  })
  @IsEnum(LuzRequerida, {
    message: 'El valor debe ser una cantidad de luz requerida valida ',
  })
  public luz: LuzRequerida;
  
 @ApiProperty({
  name: 'frecuenciaDeRiego',  
  description: 'Enum Frecuencia de riego',
  enum: FrecuenciaDeRiego,
  example: FrecuenciaDeRiego.SEMANAL,
})
@IsEnum(FrecuenciaDeRiego, {
  message: 'El valor debe ser Frecuencia de riego valido',
})
public frecuenciaDeRiego: FrecuenciaDeRiego;

@ApiProperty({
    name: 'humedadIdeal',  
    description: 'Enum Nivel de humedad ideal',
    enum: NivelDeHumedad,
    example: NivelDeHumedad.ALTA,
  })
  @IsEnum(NivelDeHumedad, {
    message: 'El valor debe ser Nivel de humedad ideal valida',
  })
  public humedadIdeal: NivelDeHumedad;

  @ApiProperty({
    name: 'temperaturaIdeal',
    type: Number,
    description: 'temperatura ideal del planta en Grados Celcius',
    example: 18,
    required: true,
    minimum:1,
    maximum:30,
  })
  @IsNumber({}, { message: 'La temperatura ideal de planta ser un número' })
  @Min(1, { message: 'La temperatura ideal de planta debe ser mayor igual a 1 grado celcius' })
  @Max(30, { message: 'La temperatura ideal de planta debe ser menor igual a 30 grados celcius' })
  public temperaturaIdeal: number;


  @ApiProperty({
    description: 'Toxicidad para Mascotas',
    example: true,
    required: true,
    default: false,
  })
  @IsBoolean({ message: 'La toxicidad debe ser un valor booleano' })
  public toxicidadMascotas: boolean;
  
  @ApiProperty({
    name: 'tamanoMaximo',
    type: Number,
    description: 'Tamaño Máximo Planta en centimetros',
    example: 80,
    required: true,
    minimum:1,
    maximum:200,
  })
  @IsNumber({}, { message: 'El tamaño maximo de planta ser un número' })
  @Min(1, { message: 'El tamaño maximo de planta debe ser mayor igual a 1 centimetro' })
  @Max(200, { message: 'El tamaño maximo deplanta debe ser menor igual a 200 centimetros' })
  public tamanoMaximo: number;

 
  @ApiProperty({
    name: 'tipoSuelo',  
    description: 'Enum tipos de suelo ',
    enum: TipoDeSuelo,
    example: TipoDeSuelo.ARENOSO,
  })
  @IsEnum(TipoDeSuelo, {
    message: 'El valor debe ser tipo de suelo valido',
  })
  public tipoSuelo: TipoDeSuelo;

  @ApiProperty({
    name: 'dificultadDeCuidado',  
    description: 'Enum dificultad de cuidado ',
    enum: DificultadDeCuidado,
    example: DificultadDeCuidado.BAJA,
  })
  @IsEnum(DificultadDeCuidado, {
    message: 'El valor debe ser una difocultad de cuidado valida',
  })
  public dificultadDeCuidado: DificultadDeCuidado;

  @ApiProperty({
    name: 'estacion',  
    description: 'Enum Estación de mayor crecimiento',
    enum: Estacion,
    example: Estacion.PRIMAVERA,
  })
  @IsEnum(Estacion, {
    message: 'El valor debe ser una Estación de mayor crecimiento valida',
  })
  public estacion: Estacion;

  @ApiProperty({
    description: 'Lista de ID Producto de Fertilizantes sugeridos',
    type: [Number],
    example: [1, 2, 3],
    default: [],
  })
  @IsArray({ message: 'Fertilizantes sugeridos debe ser un array' })
  @IsNumber({}, { each: true, message: 'Cada fertilizante sugerido debe ser un número' })
   public fertilizantesSugeridos: number[];

   @ApiProperty({
    description: 'Lista de ID Producto de Sustratos sugeridos',
    type: [Number],
    example: [1, 2, 3],
    default: [],
  })
  @IsArray({ message: 'Sustrato sugeridos debe ser un array' })
  @IsNumber({}, { each: true, message: 'Cada sustrato sugerido debe ser un número' })
  public sustratosSugeridos: number[];

  

}
