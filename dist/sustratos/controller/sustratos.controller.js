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
exports.SustratosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_sustrato_dto_1 = require("../dto/create-sustrato.dto");
const sustratos_service_1 = require("../service/sustratos.service");
let SustratosController = class SustratosController {
    constructor(sustratosService) {
        this.sustratosService = sustratosService;
    }
    create(createSustratoDto, res) {
        res.status(200).send(createSustratoDto);
    }
    findAll(res) {
        res.status(200).send(this.sustratosService.findAll());
    }
    listaMasVendidas(res) {
        res.status(200).send(this.sustratosService.listaMasVendidas());
    }
};
exports.SustratosController = SustratosController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H0003',
        description: 'Permite crear sustratos para incorporar en catalogo de productos',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Producto tipo sustrato creado en catalogo de productos',
    }),
    (0, swagger_1.ApiBody)({ type: create_sustrato_dto_1.CreateSustratoDto }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({
        transform: true,
    }))),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sustrato_dto_1.CreateSustratoDto, Object]),
    __metadata("design:returntype", void 0)
], SustratosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H0004',
        description: 'Como cliente quiero poder ver el catalogo de productos filtrados por categoria =  Sustratos',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Catalogo Sustratos',
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SustratosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/MasVendidos/'),
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H0001 y H0002',
        description: 'Como cliente quiero ver los productos mas vendidos ',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Listado Sustratos mas vendidos ',
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SustratosController.prototype, "listaMasVendidas", null);
exports.SustratosController = SustratosController = __decorate([
    (0, swagger_1.ApiTags)('Sustratos'),
    (0, common_1.Controller)('sustratos'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __metadata("design:paramtypes", [sustratos_service_1.SustratosService])
], SustratosController);
//# sourceMappingURL=sustratos.controller.js.map