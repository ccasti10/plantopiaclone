/* import { ApiProperty } from '@nestjs/swagger';
import { ComunaSantiago } from '../entities/comunas.stgo-enum';
import { Planta } from 'src/plantas/entities/planta.entity';
import { IsEmail, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @ApiProperty({ name: 'rut', example: '12345678-9' })
  public rut: string;
  @IsString()
  @ApiProperty({ name: 'nombre', example: 'Juan Perez' })
  public nombre: string;
  @IsEmail()
  @ApiProperty({ name: 'email', example: 'mail@emaildeprueba.cl' })
  public email: string;
  @IsString()
  @ApiProperty({ name: 'password', example: 'password' })
  public password: string;
  @IsString()
  @ApiProperty({ name: 'telefono', example: '+56912345678' })
  public telefono: string;
  @IsString()
  @ApiProperty({ name: 'direccion', example: 'Calle Falsa 123' })
  public direccion: string;
  @IsString()
  @ApiProperty({ name: 'ciudad', example: 'Santiago' })
  public ciudad: string;
  @IsString()
  @ApiProperty({ name: 'region', example: 'Metropolitana' })
  public region: string;
  @ApiProperty({
    example: ComunaSantiago.Santiago,
    enum: ComunaSantiago,
    name: 'ComunaSantiago',
  })
  public ComunaSantiago: ComunaSantiago;
  @IsString()
  @ApiProperty({ name: 'codigoPostal', example: '1234567' })
  public codigoPostal: string;
  @ApiProperty({ name: 'plantas', example: '[Pl01, PL02]' })
  public plantas: Planta[];
}
 */
import { ApiProperty } from '@nestjs/swagger';
import { ComunaSantiago } from '../entities/comunas.stgo-enum';
import { Planta } from 'src/plantas/entities/planta.entity';
import {
  IsEmail,
  IsString,
  IsEnum,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUsuarioDto {
  @IsString()
  @ApiProperty({ name: 'rut', example: '12345678-9' })
  public rut: string;

  @IsString()
  @ApiProperty({ name: 'nombre', example: 'Juan Perez' })
  public nombre: string;

  @IsEmail()
  @ApiProperty({ name: 'email', example: 'mail@emaildeprueba.cl' })
  public email: string;

  @IsString()
  @ApiProperty({ name: 'password', example: 'password' })
  public password: string;

  @IsString()
  @ApiProperty({ name: 'telefono', example: '+56912345678' })
  public telefono: string;

  @IsString()
  @ApiProperty({ name: 'direccion', example: 'Calle Falsa 123' })
  public direccion: string;

  @IsString()
  @ApiProperty({ name: 'ciudad', example: 'Santiago' })
  public ciudad: string;

  @IsString()
  @ApiProperty({ name: 'region', example: 'Metropolitana' })
  public region: string;

  // Agregar validación para enum
  @IsEnum(ComunaSantiago)
  @ApiProperty({
    example: ComunaSantiago.Santiago,
    enum: ComunaSantiago,
    name: 'ComunaSantiago',
  })
  public ComunaSantiago: ComunaSantiago;

  @IsString()
  @ApiProperty({ name: 'codigoPostal', example: '1234567' })
  public codigoPostal: string;

  // Agregar validación para array y nested objects
  @IsArray()
  @ApiProperty({ name: 'plantas', example: ['Pl01, PL02'] })
  public plantas: Planta[];
}
