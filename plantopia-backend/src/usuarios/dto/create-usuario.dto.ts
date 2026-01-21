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
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsNumber,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUsuarioDto {
 

    @ApiProperty({
      name: 'rut',
      description: 'Rut Usuario con digito y guion ',
      example:'12345678-k',
      required: true,
      type: 'string', 
      minLength:3,
      maxLength:10,
      nullable:false
    })
    @IsString({ message: 'El rut debe contener guion y digito' })
    @IsNotEmpty({ message: 'El rut es campo obligatorio' })
    @MinLength(3, { message: 'El largo del rut debe ser mayor igual a 3 caracteres' })
    @MaxLength(10, { message: 'El largo del rut debe ser menor igual a 10 caracteres' })
    public rut: string;

    @ApiProperty({
      name: 'nombre',
      description: 'Nombre completo Usuario',
      example:'Juan Andres Perez Cotapo',
      required: true,
      type: 'string', 
      minLength:10,
      maxLength:100,
      nullable:false
    })
    @IsString({ message: 'El nombre debe contener solo texto' })
    @IsNotEmpty({ message: 'El nombre es campo obligatorio' })
    @MinLength(10, { message: 'El largo del nombre debe ser mayor igual a 10 caracteres' })
    @MaxLength(100, { message: 'El largo del nombre debe ser menor igual a 100 caracteres' })
  public nombre: string;

  @ApiProperty({
    name: 'email',
    example: 'mail@emaildeprueba.cl',
    description: 'El correo electrónico del usuario. Debe estar en formato válido de email.',
    minLength:10,
    maxLength:200,
    type: String,
  })
  @IsEmail({}, { message: 'El email debe tener un formato válido.' })
  @IsNotEmpty({ message: 'El email es campo obligatorio' })
  @MinLength(10, { message: 'El largo del email debe ser mayor igual a 10 caracteres' })
  @MaxLength(200, { message: 'El largo del email debe ser menor igual a 100 caracteres' })
  public email: string;

  @ApiProperty({
    name: 'password',
    example: 'ABCD1234',
    description: 'Clave Usuario',
    minLength:8,
    maxLength:10,
    type: String,
  })
  @IsNotEmpty({ message: 'El password es campo obligatorio' })
  @MinLength(8, { message: 'El largo del password debe ser mayor igual a 8 caracteres' })
  @MaxLength(10, { message: 'El largo del password debe ser menor igual a 10 caracteres' })
  public password: string;

  @ApiProperty({
    name: 'telefono',
    type: Number,
    description: 'telefono contacto',
    example: 959995226,
    required: true,
    minimum:100000,
    maximum:5699999999,
  })
  @IsNumber({}, { message: 'El telefono debe ser un número' })
  @Min(100000, { message: 'El telefono  debe ser al mayor igual a 100000' })
  @Max(5699999999, { message: 'El telefono debe ser menor igual a 5699999999' })
  public telefono: number;

  @ApiProperty({
    name: 'direccion',
    example: 'moilina 455',
    description: 'direccion Usuario',
    minLength:5,
    maxLength:300,
    type: String,
  })
  @IsNotEmpty({ message: 'La direccion es campo obligatorio' })
  @MinLength(5, { message: 'El largo de la direccion debe ser mayor igual a 5 caracteres' })
  @MaxLength(300, { message: 'El largo de la direccion debe ser menor igual a 300 caracteres' })
  public direccion: string;

  @ApiProperty({
    name: 'ciudad',
    example: 'Santiago',
    description: 'direccion Usuario',
    minLength:4,
    maxLength:100,
    type: String,
  })
  @IsNotEmpty({ message: 'La ciudad es campo obligatorio' })
  @MinLength(4, { message: 'El largo de la ciudad debe ser mayor igual a 4 caracteres' })
  @MaxLength(100, { message: 'El largo de la ciudad debe ser menor igual a 100 caracteres' })
  public ciudad: string;

  @ApiProperty({
    name: 'region',
    example: 'Metropolitana',
    description: 'region de la direccion del Usuario',
    minLength:5,
    maxLength:100,
    type: String,
  })
  @IsNotEmpty({ message: 'La region es campo obligatorio' })
  @MinLength(5, { message: 'El largo de la region debe ser mayor igual a 5 caracteres' })
  @MaxLength(100, { message: 'El largo de la region debe ser menor igual a 100 caracteres' })
  public region: string;

  @ApiProperty({
    name: 'comuna',
    example: 'Santiago',
    description: 'comuna de la direccion del Usuario',
    minLength:5,
    maxLength:100,
    type: String,
  })
  @IsNotEmpty({ message: 'La comuna es campo obligatorio' })
  @MinLength(5, { message: 'El largo de la comuna debe ser mayor igual a 5 caracteres' })
  @MaxLength(100, { message: 'El largo de la comuna debe ser menor igual a 100 caracteres' })
  public comuna: string;

  @ApiProperty({
    name: 'codigoPostal',
    type: Number,
    description: 'codigo postal ',
    example: 21000001,
    required: true,
    minimum:100000,
    maximum:999999999,
  })
  @IsNumber({}, { message: 'El codigo postal debe ser un número' })
  @Min(100000, { message: 'El codigo postal  debe ser al mayor igual a 100000' })
  @Max(999999999, { message: 'El codigo postal debe ser menor igual a 999999999' })
  public codigoPostal: number;

  // Agregar validación para array y nested objects


  @ApiProperty({
    description: 'Lista de Codigo de Plantas adquiridas por el usaurio',
    type: [String],
    example: ['Pl01, PL02'],
    default: [],
  })
  @IsArray({ message: 'Plantas debe un array' })
  @IsString({ each: true, message: 'Cada codigo de plante debe ser una cadena de texto.' })
  public plantas: Planta[];
}
