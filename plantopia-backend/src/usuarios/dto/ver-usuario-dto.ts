import { ApiProperty } from '@nestjs/swagger';
import { Planta } from 'src/plantas/entities/planta.entity';

export class VerUsuarioDto {


  @ApiProperty({ example: 'Juan Perez' })
  public nombre: string;

  @ApiProperty({ example: 'juan.perez@mail.com' })
  public email: string;


  @ApiProperty({ type: [Planta], example: [] })
  public plantas: Planta[];

  constructor(nombre: string, email: string, plantas: Planta[]) {
    this.nombre = nombre;
    this.email = email;
    this.plantas = plantas;
  }

}
