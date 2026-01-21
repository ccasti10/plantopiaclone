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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const usuarios_service_1 = require("../service/usuarios.service");
const create_usuario_dto_1 = require("../dto/create-usuario.dto");
const update_usuario_dto_1 = require("../dto/update-usuario.dto");
let UsuariosController = class UsuariosController {
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
    }
    findAll() {
        return this.usuariosService.findAll();
    }
    findOne(id) {
        return this.usuariosService.findOne(id);
    }
    create(createUserDto) {
        return this.usuariosService.create(createUserDto);
    }
    update(id, updateUserDto) {
        return this.usuariosService.update(id, updateUserDto);
    }
    remove(id) {
        return this.usuariosService.remove(id);
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los usuarios' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de usuarios obtenida con éxito.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'id del usuario a obtener',
        required: true,
        schema: { type: 'integer' },
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un usuario por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuario obtenido con éxito.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuario no encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo usuario' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Usuario creado con éxito.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos.' }),
    (0, swagger_1.ApiBody)({ type: create_usuario_dto_1.CreateUsuarioDto }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usuario_dto_1.CreateUsuarioDto]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un usuario existente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuario actualizado con éxito.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuario no encontrado.' }),
    (0, swagger_1.ApiBody)({ type: update_usuario_dto_1.UpdateUsuarioDto }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'id del usuario a actualizar',
        required: true,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_usuario_dto_1.UpdateUsuarioDto]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'id del usuario a eliminar',
        required: true,
        schema: { type: 'integer' },
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un usuario' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuario eliminado con éxito.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuario no encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "remove", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, swagger_1.ApiTags)('usuarios'),
    (0, common_1.Controller)('usuarios'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map