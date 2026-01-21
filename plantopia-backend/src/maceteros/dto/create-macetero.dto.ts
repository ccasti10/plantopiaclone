import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { ApiProperty } from '@nestjs/swagger';
import { FormaMacetero } from "../entities/enum-macetero";
import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min } from 'class-validator';
export class CreateMaceteroDto extends CreateProductoDto {
    @ApiProperty({
        name: 'alto',
        type: Number,
        description: 'Altura de macetero expresado en cm',
        example: 15,
        required: true,
        minimum: 10,
        maximum: 150,
    })
    @IsNumber({}, { message: 'El alto debe ser un número' })
    @Min(5, { message: 'El alto del macetero debe ser al menos 5 cm' })
    @Max(150, { message: 'El alto del macetero no puede ser mayor que 150 cm' })
    public alto: number;

    @ApiProperty({
        name: 'ancho',
        type: Number,
        description: 'ancho de macetero expresado en cm',
        example: 15,
        required: true,
        minimum: 5,
        maximum: 100,
    })
    @IsNumber({}, { message: 'El ancho debe ser un número' })
    @Min(5, { message: 'El ancho del macetero debe ser al menos 5 cm' })
    @Max(100, { message: 'El ancho del macetero debe serno puede ser mayor que 100 cm' })
    public ancho: number;

    @ApiProperty({
        name: 'peso',
        type: Number,
        description: 'peso de macetero expresado en kilos',
        example: 15,
        required: true,
        minimum: 0.1,
        maximum: 5,
    })
    @IsNumber({}, { message: 'El peso debe ser un número' })
    @Min(0.1, { message: 'El peso del macetero debe ser mayor igual a 0.1 kilos' })
    @Max(5, { message: 'El peso del macetero debe ser menor igual a 5 kilos' })
    public peso: number;

    @ApiProperty({
        name: 'capacidad',
        type: Number,
        description: 'capacidad de macetero expresado en litros',
        example: 13,
        required: true,
        minimum: 0.1,
        maximum: 5,
    })
    @IsNumber({}, { message: 'La capacidad debe ser un número' })
    @Min(1, { message: 'La capacidad del macetero debe ser mayor igual a 1 litros' })
    @Max(100, { message: 'La capacidad del macetero debe ser menor igual a 100 litros' })
    public capacidad: number;


    @ApiProperty({
        name: 'material',
        description: 'material del macetero',
        example: 'Plastico',
        required: true,
        type: 'string',
        maxLength: 150,
        nullable: false
    })
    @IsString({ message: 'El material del macetero debe ser texto' })
    @IsNotEmpty({ message: 'El material del macetero es campo obligatorio' })
    @MaxLength(150, { message: 'Largo del material del macetero de ser menor igual a 150 caracteres' })
    public material: string;

    @ApiProperty({
        name: 'color',
        description: 'color del macetero',
        example: 'Plastico',
        required: true,
        type: 'string',
        maxLength: 100,
        nullable: false
    })
    @IsString({ message: 'El color del macetero debe ser texto' })
    @IsNotEmpty({ message: 'El color del macetero es campo obligatorio' })
    @MaxLength(100, { message: 'Largo del color del macetero de ser menor igual a 100 caracteres' })
    public color: string;

    @ApiProperty({
        description: 'Enum Tipo Producto',
        enum: FormaMacetero, example: FormaMacetero.Circular
    })
    @IsEnum(FormaMacetero, { message: 'El valor debe ser una forma de macetero válida' })
    public forma: FormaMacetero;
}
