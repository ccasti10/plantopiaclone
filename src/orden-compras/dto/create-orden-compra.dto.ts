import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsEmail, ValidateNested } from "class-validator";
import { CreateDetalleOrdenCompraDto } from "src/detalle-orden-compras/dto/create-detalle-orden-compra.dto";
export class CreateOrdenCompraDto {
  
  @ApiProperty({ example: "rodrigoc@gmail.com", description: "Correo electrónico del usuario (debe ser un correo con formato válido)" })
  @IsEmail({ }, { message: "El email debe ser un correo electrónico válido" })

  public emailComprador: string;
    @ApiProperty({
      description: 'id Cliente',
        example: 1,
        default: 0
      })
    public idCliente?: number;
    @ApiProperty({
      type: [CreateDetalleOrdenCompraDto], // Define que es un array de CreateDetalleOrdenCompraDto
      description: 'Lista de detalles con los productos y cantidades',
      example: [
        { idProducto: '1', cantidad: 2,  precio:  1500,  descuento: 0 },
        { idProducto: '2', cantidad: 1,  precio:  2500,  descuento: 0  }
      ]
    })
    @IsArray()
    @ValidateNested({ each: true }) // Valida cada elemento del array de manera individual
    @Type(() => CreateDetalleOrdenCompraDto) // Especifica que los elementos del array son del tipo CreateDetalleDto
    public detalle : CreateDetalleOrdenCompraDto[];
}
