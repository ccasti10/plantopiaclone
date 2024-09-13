import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Producto } from 'src/productos/entities/producto.entity';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class Venta {
  @ApiProperty({
    name: 'idventa',
    example: 1,
    description: 'Identificador de la venta',
  })
  @IsNumber()
  @Min(1)
  public idventa: number;

  @ApiProperty({
    description: 'Productos de la venta',
    type: [Producto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Producto)
  @IsNotEmpty()
  public idproducto: Producto[];

  @ApiProperty({
    description: 'Cantidad de productos',
    example: [1, 2],
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @Min(1, { each: true })
  public cantidad: number[];

  @ApiProperty({
    description: 'Total de la venta',
    example: 100000,
  })
  @IsNumber()
  @Min(0)
  public total: number;

  @ApiProperty({
    description: 'Fecha de la venta',
    example: new Date(),
  })
  @IsDate()
  @IsNotEmpty()
  public fecha: Date;

  @ApiProperty({
    description: 'Descuento de la venta',
    example: 10000,
  })
  @IsNumber()
  @Min(0)
  public totaldescto: number;

  @ApiProperty({
    description: 'Cliente que realiza la compra',
    example: 'new Usuario()',
    type: Usuario,
  })
  @ValidateNested()
  @Type(() => Usuario)
  @IsNotEmpty()
  public rutcliente: Usuario;

  @ApiProperty({
    description: 'Estado de la venta',
    example: 'Pendiente',
  })
  @IsString()
  @IsNotEmpty()
  public estado: string;
}
