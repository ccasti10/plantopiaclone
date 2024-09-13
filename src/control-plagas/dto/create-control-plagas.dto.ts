import { ApiProperty } from "@nestjs/swagger";
import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { Eficacia, MetodoAplicacion, TipoPlaga } from "../entities/enum-control-plagas";
import { IsArray, IsBoolean, IsEnum, IsString } from "class-validator";
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
    example: [TipoPlaga.ACAROS, TipoPlaga.COCHINILLAS, TipoPlaga.COCHINILLAS ],
  })
  @IsArray({ message: 'El valor debe ser un array de metodos' })
  @IsEnum(TipoPlaga, { each: true, message: 'El valor debe ser un tipo de plagan válido' }) 
  public TipoPlagaControlada: TipoPlaga[];

@ApiProperty({
    description: 'Composicion Producto ',
    example: 'Aceite de neem(azadiractina)'
})
public composicion: string;

@ApiProperty({
    description: 'Metodos de Aplicacion Producto',
    enum: MetodoAplicacion,
    example: [MetodoAplicacion.SPRAY_FOLIAR, MetodoAplicacion.APLICACION_SUELO],
  })
  @IsArray({ message: 'El valor debe ser un array de metodos' })
  @IsEnum(MetodoAplicacion, { each: true, message: 'El valor debe ser un metodo de aplicacion válido' }) // Agregar "each: true"
  public metodoAplicacion: MetodoAplicacion[];

@IsString()
@ApiProperty({
    description: 'frecuencia Aplicacion',
    example: 'Cada 7-14 días según la infestación'
})
public frecuenciaAplicacion: string;

@IsString()
@ApiProperty({
    description: 'precauciones',
    example: 'Seguridad para mascotas, evitar el contacto directo con ojos y piel'
})
public precauciones: string;



@ApiProperty({
    description: 'Metodos de Aplicacion Producto',
    enum: Eficacia,     example: Eficacia.ALTA
})
@IsEnum(Eficacia, { message: 'El valor debe ser eficacia valida' })
public eficacia: Eficacia;

@IsBoolean()
@ApiProperty({
    description: 'Indica si el producto es tóxico',
    example: true
})
public Toxicidad: boolean;
}
