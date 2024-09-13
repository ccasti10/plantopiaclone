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
exports.ControlPlagasController = void 0;
const common_1 = require("@nestjs/common");
const control_plagas_service_1 = require("./control-plagas.service");
const create_control_plagas_dto_1 = require("./dto/create-control-plagas.dto");
const swagger_1 = require("@nestjs/swagger");
let ControlPlagasController = class ControlPlagasController {
    constructor(controlPlagasService) {
        this.controlPlagasService = controlPlagasService;
    }
    create(createControlPlagasDto, res) {
        res.status(200).send(createControlPlagasDto);
    }
    findAll(res) {
        res.status(200).send(this.controlPlagasService.findAll());
    }
    listaMasVendidas(res) {
        res.status(200).send(this.controlPlagasService.listaMasVendidas());
    }
};
exports.ControlPlagasController = ControlPlagasController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H0003',
        description: 'Permite crear control de plagas para incorporar en catalogo de productos',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Producto tipo control plagas creado en catalogo de productos',
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_control_plagas_dto_1.CreateControlPlagasDto, Object]),
    __metadata("design:returntype", void 0)
], ControlPlagasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H0004',
        description: 'Como cliente quiero poder ver el catalogo de productos filtrados por categoria =  Control Plagas',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Catalogo Control Plagas',
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ControlPlagasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/MasVendidos/'),
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H0001 y H0002',
        description: 'Como cliente quiero ver los productos mas vendidos ',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Listado Control de Plagas mas vendidos ',
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ControlPlagasController.prototype, "listaMasVendidas", null);
exports.ControlPlagasController = ControlPlagasController = __decorate([
    (0, swagger_1.ApiTags)('Control de Plagas'),
    (0, common_1.Controller)('control-plagas'),
    __metadata("design:paramtypes", [control_plagas_service_1.ControlPlagasService])
], ControlPlagasController);
//# sourceMappingURL=control-plagas.controller.js.map