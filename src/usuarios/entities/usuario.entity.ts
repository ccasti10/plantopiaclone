import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Planta } from 'src/plantas/entities/planta.entity';
import { ComunaSantiago } from '../entities/comunas.stgo-enum';

export class Usuario {
  @ApiProperty({
    description: 'Identificador único del usuario',
    example: 1,
  })
  @IsNotEmpty()
  public id: number;

  @ApiProperty({
    description: 'RUT del usuario (formato chileno)',
    example: '12345678-9',
  })
  @Matches(/^\d{7,8}-[0-9Kk]$/, { message: 'El RUT no es válido' })
  public rut: string;

  @ApiProperty({
    description: 'Nombre completo del usuario',
    example: 'Juan Pérez',
  })
  @IsNotEmpty()
  @IsString()
  public nombre: string;

  @ApiProperty({
    description: 'Email del usuario',
    example: 'juan.perez@example.com',
  })
  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  public email: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    example: 'password123',
  })
  @IsNotEmpty()
  @Length(8, 20, {
    message: 'La contraseña debe tener entre 8 y 20 caracteres',
  })
  public password: string;

  @ApiProperty({
    description: 'Teléfono del usuario',
    example: '+56912345678',
  })
  @IsNotEmpty()
  @Matches(/^\+569\d{8}$/, { message: 'El número de teléfono no es válido' })
  public telefono: string;

  @ApiProperty({
    description: 'Dirección del usuario',
    example: 'Calle Falsa 123',
  })
  @IsNotEmpty()
  public direccion: string;

  @ApiProperty({
    description: 'Ciudad del usuario',
    example: 'Santiago',
  })
  @IsNotEmpty()
  public ciudad: string;

  @ApiProperty({
    description: 'Región del usuario',
    example: 'Región Metropolitana',
  })
  @IsNotEmpty()
  public region: string;

  @ApiProperty({
    description: 'Comuna de Santiago del usuario',
    enum: ComunaSantiago,
    example: ComunaSantiago.Providencia,
  })
  @IsEnum(ComunaSantiago, { message: 'La comuna no es válida' })
  public comunaSantiago: ComunaSantiago;

  @ApiProperty({
    description: 'Código postal del usuario',
    example: '7550000',
  })
  @IsNotEmpty()
  @Matches(/^\d{7}$/, { message: 'El código postal no es válido' })
  public codigoPostal: string;

  @ApiProperty({
    description: 'Lista de plantas asociadas al usuario',
    type: [Planta],
  })
  @IsOptional()
  public plantas: Planta[];

  constructor(
    id: number,
    rut: string,
    nombre: string,
    email: string,
    password: string,
    telefono: string,
    direccion: string,
    ciudad: string,
    region: string,
    comunaSantiago: ComunaSantiago,
    codigoPostal: string,
    plantas: Planta[],
  ) {
    this.id = id;
    this.rut = rut;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.telefono = telefono;
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.region = region;
    this.comunaSantiago = comunaSantiago;
    this.codigoPostal = codigoPostal;
    this.plantas = plantas;
  }
}

//import {
//  IsString,
//  IsNotEmpty,
//  IsEmail,
//  IsPhoneNumber,
//  Length,
//  IsEnum,
//  Matches,
//} from 'class-validator';

//export class Usuario {
//  @ApiProperty({
//    name: 'rut',
//    example: '12345678-9',
//    description: 'RUT del usuario en formato chileno',
//  })
//  @IsString()
//  @Matches(/^\d{7,8}-[0-9kK]$/, {
//    message: 'El formato del RUT no es válido',
//  })
//  @IsNotEmpty()
//  public rut: string;
//
//  @ApiProperty({
//    name: 'nombre',
//    example: 'Juan Perez',
//    description: 'Nombre completo del usuario',
//  })
//  @IsString()
//  @IsNotEmpty()
//  public nombre: string;
//
//  @ApiProperty({
//    name: 'email',
//    example: 'mail@emaildeprueba.cl',
//    description: 'Correo electrónico del usuario',
//  })
//  @IsEmail()
//  @IsNotEmpty()
//  public email: string;
//
//  @ApiProperty({
//    name: 'password',
//    example: 'password',
//    description: 'Contraseña del usuario',
//  })
//  @IsString()
//  @Length(6, 20)
//  @IsNotEmpty()
//  private password: string;
//
//  @ApiProperty({
//    name: 'telefono',
//    example: '+56912345678',
//    description: 'Número de teléfono del usuario',
//  })
//  @IsPhoneNumber('CL', {
//    message: 'El número de teléfono debe ser válido en Chile',
//  })
//  @IsNotEmpty()
//  public telefono: string;
//
//  @ApiProperty({
//    name: 'direccion',
//    example: 'Calle Falsa 123',
//    description: 'Dirección del usuario',
//  })
//  @IsString()
//  @IsNotEmpty()
//  public direccion: string;
//
//  @ApiProperty({
//    name: 'ciudad',
//    example: 'Santiago',
//    description: 'Ciudad de residencia del usuario',
//  })
//  @IsString()
//  @IsNotEmpty()
//  public ciudad: string;
//
//  @ApiProperty({
//    name: 'region',
//    example: 'Metropolitana',
//    description: 'Región de residencia del usuario',
//  })
//  @IsString()
//  @IsNotEmpty()
//  public region: string;
//
//  @ApiProperty({
//    name: 'comuna',
//    example: 'Santiago',
//    enum: ComunaSantiago,
//    description: 'Comuna de residencia dentro de Santiago',
//  })
//  @IsEnum(ComunaSantiago)
//  @IsNotEmpty()
//  public comuna: string;
//
//  @ApiProperty({
//    name: 'codigoPostal',
//    example: '1234567',
//    description: 'Código postal de la dirección del usuario',
//  })
//  @Matches(/^\d{7}$/, {
//    message: 'El código postal debe contener 7 dígitos',
//  })
//  @IsNotEmpty()
//  public codigoPostal: string;
//}
