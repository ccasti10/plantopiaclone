import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { ApiProperty } from '@nestjs/swagger';
import { FormaMacetero } from "../entities/enum-macetero";
import { IsArray, IsEnum, IsNotEmpty, IsNumber,  IsString, Max, Min } from 'class-validator';
export class CreateMaceteroDto extends CreateProductoDto {
    @ApiProperty({
        description: 'Altura de macetero expresado en cm',
        example: 15
    })
    @IsNumber()
    @Min(5, { message: 'El alto del macetero debe ser al menos 5 cm' })
    @Max(150, { message: 'El alto del macetero no puede ser mayor que 150 cm' })
    public alto: number;

    @ApiProperty({
        description: 'ancho de macetero expresado en cm',
        example: 15
    })
    @IsNumber()
    @Min(5, { message: 'El ancho del macetero debe ser al menos 5 cm' })
    @Max(100, { message: 'El ancho del macetero debe serno puede ser mayor que 100 cm' })
    public ancho: number;

    @ApiProperty({
        description: 'peso de macetero expresado en kilos',
        example: 15
    })
    @IsNumber()
    @Min(0.1, { message: 'El ancho del macetero debe ser al menos 0.1 kilos' })
    public peso: number;

    @ApiProperty({
        description: 'capacidad de macetero expresado en litros',
        example: 13
    })
    @IsNumber()
    @Min(0.5, { message: 'El ancho del macetero debe ser al menos 0.5 litros' })
    public capacidad: number;

    @ApiProperty({
        description: 'material del macetero',
        example: 13
    })
    @IsString()
    @IsNotEmpty({message: 'No puede estar vacio el material del macetero'})
    public material: string;

    @ApiProperty({
        description: 'color del macetero',
        example: 13
    })
    @IsString()
    @IsNotEmpty({message: 'No puede estar vacio el color del macetero'})
    public color: string;

    @ApiProperty({
        description: 'Enum Tipo Producto',
        enum: FormaMacetero, example: FormaMacetero.Circular
    })
    @IsEnum(FormaMacetero, { message: 'El valor debe ser una forma de macetero válida' })
    public forma: FormaMacetero;
}
