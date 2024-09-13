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
exports.VentasController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ventas_service_1 = require("../service/ventas.service");
const create_venta_dto_1 = require("../dto/create-venta.dto");
const update_venta_dto_1 = require("../dto/update-venta.dto");
let VentasController = class VentasController {
    constructor(ventasService) {
        this.ventasService = ventasService;
    }
    findAll() {
        return this.ventasService.findAll();
    }
    findOne(id) {
        return this.ventasService.findOne(id);
    }
    create(createVentaDto) {
        return this.ventasService.create(createVentaDto);
    }
    update(id, updateVentaDto) {
        return this.ventasService.update(id, updateVentaDto);
    }
    remove(id) {
        return this.ventasService.remove(id);
    }
};
exports.VentasController = VentasController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las ventas' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de ventas obtenida con éxito.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'id de la venta a obtener',
        required: true,
        schema: { type: 'integer' },
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una venta por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Venta obtenida con éxito.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Venta no encontrada.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({
        type: typeof create_venta_dto_1.CreateVentaDto,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva venta' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Venta creada con éxito.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos.' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_venta_dto_1.CreateVentaDto]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'id de la venta a actualizar',
        required: true,
        schema: { type: 'UpdateVentaDto' },
    }),
    (0, swagger_1.ApiBody)({
        type: typeof update_venta_dto_1.UpdateVentaDto,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una venta existente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Venta actualizada con éxito.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Venta no encontrada.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_venta_dto_1.UpdateVentaDto]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'description',
        required: true,
        schema: { type: 'integer' },
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una venta' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Venta eliminada con éxito.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Venta no encontrada.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "remove", null);
exports.VentasController = VentasController = __decorate([
    (0, swagger_1.ApiTags)('ventas'),
    (0, common_1.Controller)('ventas'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __metadata("design:paramtypes", [ventas_service_1.VentasService])
], VentasController);
//# sourceMappingURL=ventas.controller.js.map