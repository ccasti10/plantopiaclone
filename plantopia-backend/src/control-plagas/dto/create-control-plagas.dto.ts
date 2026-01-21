import { ApiProperty } from "@nestjs/swagger";
import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { Eficacia, MetodoAplicacion, TipoPlaga } from "../entities/enum-control-plagas";
import { ArrayNotEmpty, IsArray, IsBoolean, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { TipoProductos } from "src/productos/entities/enum-productos";

export class CreateControlPlagasDto extends CreateProductoDto {

    @ApiProperty({
        name: 'categoria',
        description: 'Enum Tipo Producto',
        enum: TipoProductos, example: TipoProductos.ControlPlagas
    })
    @IsEnum(TipoProductos, { message: 'El valor debe ser una tipo de producto válido' })
    public categoria: TipoProductos;

    @ApiProperty({
        description: 'Lista de Plagas controladas',
        enum: TipoPlaga,
        example: [TipoPlaga.ACAROS, TipoPlaga.COCHINILLAS, TipoPlaga.COCHINILLAS],
    })
    @IsArray({ message: 'El valor debe ser un array de Plagas' })
    @ArrayNotEmpty({ message: 'La lista plagas controladas no puede estar vacía' })
    @IsEnum(TipoPlaga, { each: true, message: 'El valor debe ser un tipo de plagan válido' })
    public TipoPlagaControlada: TipoPlaga[];

    @ApiProperty({
        name: 'composicion',
        description: 'Composicion del plaguisida',
        example: 'Aceite de neem(azadiractina)',
        required: true,
        type: 'string', 
        minLength:5,
        maxLength:100,
        nullable:false
      })
   @IsString({ message: 'Composicion del plaglisida debe ser texto' })
   @IsNotEmpty({ message: 'Composicion del plaguisida es campo obligatorio' })
   @MinLength(5, { message: 'Largo de Composicion del plaglisida  debe ser mayor igual  de 5 caracteres' })
   @MaxLength(100, { message: 'Largo de Composicion del plaglisida  debe ser menor igual  de 100 caracteres' })
   public composicion: string;

    @ApiProperty({
        description: 'Metodos de Aplicacion Producto',
        enum: MetodoAplicacion,
        example: [MetodoAplicacion.SPRAY_FOLIAR, MetodoAplicacion.APLICACION_SUELO],
    })
    @IsArray({ message: 'El valor debe ser un array de metodos' })
    @ArrayNotEmpty({ message: 'La lista metodos de aplicacion no puede estar vacía' })
    @IsEnum(MetodoAplicacion, { each: true, message: 'El valor debe ser un metodo de aplicacion válido' }) // Agregar "each: true"
    public metodoAplicacion: MetodoAplicacion[];

    @ApiProperty({
        name: 'frecuenciaAplicacion',
        description: 'frecuencia Aplicacion',
        example: 'Cada 7-14 días según la infestación',
        required: true,
        type: 'string', 
        minLength:5,
        maxLength:100,
        nullable:false
      })
   @IsString({ message: 'frecuencia Aplicacion debe ser texto' })
   @IsNotEmpty({ message: 'frecuencia Aplicacion es campo obligatorio' })
   @MinLength(5, { message: 'Largo de frecuencia Aplicacion  debe ser mayor igual  de 5 caracteres' })
   @MaxLength(100, { message: 'Largo de frecuencia Aplicacion  debe ser menor igual  de 100 caracteres' })
   public frecuenciaAplicacion: string;

    @ApiProperty({
        name: 'precauciones',
        description: 'precauciones',
        example: 'Seguridad para mascotas, evitar el contacto directo con ojos y piel',
        required: true,
        type: 'string', 
        minLength:5,
        maxLength:200,
        nullable:false
      })
   @IsString({ message: 'Las precauciones del plaguisida debe ser texto' })
   @IsNotEmpty({ message: 'Las precauciones del plaguisida es campo obligatorio' })
   @MinLength(5, { message: 'Largo de Las precauciones del plaguisida  debe ser mayor igual  de 5 caracteres' })
   @MaxLength(200, { message: 'Largo de Las precauciones del plaguisida  debe ser menor igual  de 200 caracteres' })
   public precauciones: string;

    @ApiProperty({
        description: 'Metodos de Aplicacion Producto',
        enum: Eficacia, example: Eficacia.ALTA
    })
    @IsEnum(Eficacia, { message: 'El valor debe ser eficacia valida' })
    public eficacia: Eficacia;

    @ApiProperty({
        description: 'Toxicidad del producto',
        example: true,
        required: true,
        default: false,
      })
    @IsBoolean({ message: 'La toxicidad debe ser un valor booleano' })
    public Toxicidad: boolean;
}
