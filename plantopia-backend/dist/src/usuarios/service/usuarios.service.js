"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const usuario_entity_1 = require("../entities/usuario.entity");
const plantas_service_1 = require("../../plantas/service/plantas.service");
let UsuariosService = class UsuariosService {
    constructor(servicioPlantas) {
        this.servicioPlantas = servicioPlantas;
        this.usuarios = [
            new usuario_entity_1.Usuario(1, '12345678-9', 'Carlo Escobar', 'carlo.escobar@mail.com', 'pprrprr3223#43', 56912345678, 'Calle Falsa 123', 'Santiago', 'Metropolitana', 'Santiago', 1234567, [this.servicioPlantas.plantas[0]]),
            new usuario_entity_1.Usuario(2, '98765432-1', 'Maria González', 'maria.gonzalez@mail.com', 'batman211', 56987654321, 'Av. Siempre Viva 742', 'Santiago', 'Metropolitana', 'Ñuñoa', 7654321, []),
            new usuario_entity_1.Usuario(3, '12312312-3', 'Pen-Sil López', 'pensil.lopez@mail.com', 'contraseñajeje2', 56912312345, 'Pasaje Los Arboles 15', 'Santiago', 'Metropolitana', 'Providencia', 2345678, []),
            new usuario_entity_1.Usuario(4, '32132132-4', 'Ana Ramirez', 'ana.ramirez@mail.com', 'abcdefg23', 932132145, 'Calle Las Rosas 56', 'Santiago', 'Metropolitana', 'Las Condes', 8765432, [this.servicioPlantas.plantas[1], this.servicioPlantas.plantas[2]]),
        ];
    }
    create(createUsuarioDto) {
        const newUsuario = new usuario_entity_1.Usuario(this.usuarios.length + 1, createUsuarioDto.rut, createUsuarioDto.nombre, createUsuarioDto.email, createUsuarioDto.password, createUsuarioDto.telefono, createUsuarioDto.direccion, createUsuarioDto.ciudad, createUsuarioDto.region, createUsuarioDto.comuna, createUsuarioDto.codigoPostal, createUsuarioDto.plantas);
        this.usuarios.push(newUsuario);
        return newUsuario;
    }
    findAll() {
        return this.usuarios;
    }
    findOne(id) {
        const usuario = this.usuarios.find((user) => user.id === id);
        if (!usuario) {
            return null;
        }
        return usuario;
    }
    update(id, updateUsuarioDto) {
        return `Modulo Usuario - Epica Usuario / Actualiza Usuario #${id} usuario`;
    }
    remove(id) {
        return `TModulo Usuario - Epica Usuario / Elimina #${id} usuario`;
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [plantas_service_1.PlantasService])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map