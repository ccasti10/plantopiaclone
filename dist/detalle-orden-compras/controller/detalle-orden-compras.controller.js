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
exports.DetalleOrdenComprasController = void 0;
const common_1 = require("@nestjs/common");
const detalle_orden_compras_service_1 = require("../service/detalle-orden-compras.service");
const create_detalle_orden_compra_dto_1 = require("../dto/create-detalle-orden-compra.dto");
const update_detalle_orden_compra_dto_1 = require("../dto/update-detalle-orden-compra.dto");
let DetalleOrdenComprasController = class DetalleOrdenComprasController {
    constructor(detalleOrdenComprasService) {
        this.detalleOrdenComprasService = detalleOrdenComprasService;
    }
    create(createDetalleOrdenCompraDto) {
        return this.detalleOrdenComprasService.create(createDetalleOrdenCompraDto);
    }
    findAll() {
        return this.detalleOrdenComprasService.findAll();
    }
    findOne(id) {
        return this.detalleOrdenComprasService.findOne(+id);
    }
    update(id, updateDetalleOrdenCompraDto) {
        return this.detalleOrdenComprasService.update(+id, updateDetalleOrdenCompraDto);
    }
    remove(id) {
        return this.detalleOrdenComprasService.remove(+id);
    }
};
exports.DetalleOrdenComprasController = DetalleOrdenComprasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_detalle_orden_compra_dto_1.CreateDetalleOrdenCompraDto]),
    __metadata("design:returntype", void 0)
], DetalleOrdenComprasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DetalleOrdenComprasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DetalleOrdenComprasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_detalle_orden_compra_dto_1.UpdateDetalleOrdenCompraDto]),
    __metadata("design:returntype", void 0)
], DetalleOrdenComprasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DetalleOrdenComprasController.prototype, "remove", null);
exports.DetalleOrdenComprasController = DetalleOrdenComprasController = __decorate([
    (0, common_1.Controller)('detalle-orden-compras'),
    __metadata("design:paramtypes", [detalle_orden_compras_service_1.DetalleOrdenComprasService])
], DetalleOrdenComprasController);
//# sourceMappingURL=detalle-orden-compras.controller.js.map