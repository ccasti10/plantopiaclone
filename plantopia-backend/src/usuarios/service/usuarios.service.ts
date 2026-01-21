import { Injectable } from '@nestjs/common';
import { Usuario } from '../entities/usuario.entity';
import { ComunaSantiago } from '../entities/comunas.stgo-enum';
import { PlantasService } from 'src/plantas/service/plantas.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private readonly servicioPlantas: PlantasService) {}

  usuarios: Usuario[] = [
    new Usuario(
      1,
      '12345678-9',
      'Carlo Escobar',
      'carlo.escobar@mail.com',
      'pprrprr3223#43',
      56912345678,
      'Calle Falsa 123',
      'Santiago',
      'Metropolitana',
      'Santiago',
      1234567,
      [this.servicioPlantas.plantas[0]], // Plantas
    ),
    new Usuario(
      2,
      '98765432-1',
      'Maria González',
      'maria.gonzalez@mail.com',
      'batman211',
      56987654321,
      'Av. Siempre Viva 742',
      'Santiago',
      'Metropolitana',
      'Ñuñoa',
      7654321,
      [], // Plantas
    ),
    new Usuario(
      3,
      '12312312-3',
      'Pen-Sil López',
      'pensil.lopez@mail.com',
      'contraseñajeje2',
      56912312345,
      'Pasaje Los Arboles 15',
      'Santiago',
      'Metropolitana',
      'Providencia',
      2345678,
      [], // Plantas
    ),
    new Usuario(
      4,
      '32132132-4',
      'Ana Ramirez',
      'ana.ramirez@mail.com',
      'abcdefg23',
      932132145,
      'Calle Las Rosas 56',
      'Santiago',
      'Metropolitana',
      'Las Condes',
      8765432,
      [this.servicioPlantas.plantas[1], this.servicioPlantas.plantas[2]], // Plantas
    ),
  ];

  create(createUsuarioDto: CreateUsuarioDto) {
    const newUsuario = new Usuario(
      this.usuarios.length + 1,
      createUsuarioDto.rut,
      createUsuarioDto.nombre,
      createUsuarioDto.email,
      createUsuarioDto.password,
      createUsuarioDto.telefono,
      createUsuarioDto.direccion,
      createUsuarioDto.ciudad,
      createUsuarioDto.region,
      createUsuarioDto.comuna,
      createUsuarioDto.codigoPostal,
      createUsuarioDto.plantas,
    );

    this.usuarios.push(newUsuario);

    return newUsuario;
  }

  findAll() {
    return this.usuarios;
  }

  findOne(id: number): Usuario {
    const usuario = this.usuarios.find((user) => user.id === id);
    if (!usuario) {
      return null;
    }
    return usuario;
  }
  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `Modulo Usuario - Epica Usuario / Actualiza Usuario #${id} usuario`;
  }

  remove(id: number) {
    return `TModulo Usuario - Epica Usuario / Elimina #${id} usuario`;
  }
}
