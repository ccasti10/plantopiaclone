"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
let UsuariosService = class UsuariosService {
    create(createUsuarioDto) {
        return 'Modulo Usuario - Epica Usuarios / Crea un usuario';
    }
    findAll() {
        return `Modulo Usuario - Epica Usuarios / Retorna todos los usuarios`;
    }
    findOne(id) {
        return `Modulo Usuario - Epica Usuario / retorna por id  #${id} usuario`;
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
    (0, common_1.Injectable)()
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map