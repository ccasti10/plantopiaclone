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
exports.EquipoController = void 0;
const common_1 = require("@nestjs/common");
const equipo_service_1 = require("./equipo.service");
const swagger_1 = require("@nestjs/swagger");
let EquipoController = class EquipoController {
    constructor(equipoService) {
        this.equipoService = equipoService;
    }
    getEquipo() {
        return this.equipoService.getEquipo();
    }
    getAreas(nombreArea) {
        return this.equipoService.getAreas(nombreArea ? nombreArea : undefined);
    }
    getEcommerce() {
        console.log('ecommerce');
        return this.equipoService.getEcommerce();
    }
    findAll() {
    }
    findOne(id) {
    }
    create(createEquipoDto) {
    }
    update(id, updateEquipoDto) {
    }
    remove(id) {
    }
};
exports.EquipoController = EquipoController;
__decorate([
    (0, common_1.Get)('/informacion'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EquipoController.prototype, "getEquipo", null);
__decorate([
    (0, common_1.Get)('informacion/areas'),
    __param(0, (0, common_1.Query)('nombreArea')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], EquipoController.prototype, "getAreas", null);
__decorate([
    (0, common_1.Get)('informacion/ecommerce'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], EquipoController.prototype, "getEcommerce", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los equipos' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de equipos obtenida con éxito.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EquipoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un equipo por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Equipo obtenido con éxito.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Equipo no encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EquipoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo equipo' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Equipo creado con éxito.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EquipoController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un equipo existente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Equipo actualizado con éxito.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Equipo no encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EquipoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un equipo' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Equipo eliminado con éxito.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Equipo no encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EquipoController.prototype, "remove", null);
exports.EquipoController = EquipoController = __decorate([
    (0, swagger_1.ApiTags)('equipos'),
    (0, common_1.Controller)('equipos'),
    __metadata("design:paramtypes", [equipo_service_1.EquipoService])
], EquipoController);
//# sourceMappingURL=equipo.controller.js.map