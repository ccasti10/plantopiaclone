"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleOrdenComprasService = void 0;
const common_1 = require("@nestjs/common");
const detalle_orden_compra_entity_1 = require("../entities/detalle-orden-compra.entity");
let DetalleOrdenComprasService = class DetalleOrdenComprasService {
    constructor() {
        this.detalleOrdenes = [];
    }
    create(createDetalleOrdenCompraDto) {
        const totalPrecio = createDetalleOrdenCompraDto.precio * createDetalleOrdenCompraDto.cantidad;
        const detalleOrden = new detalle_orden_compra_entity_1.DetalleOrdenCompra(createDetalleOrdenCompraDto.idProducto, createDetalleOrdenCompraDto.cantidad, createDetalleOrdenCompraDto.precio, totalPrecio, createDetalleOrdenCompraDto.descuento);
        this.detalleOrdenes.push(detalleOrden);
    }
    findAll() {
        return `This action returns all detalleOrdenCompras`;
    }
    findOne(id) {
        return `This action returns a #${id} detalleOrdenCompra`;
    }
    update(id, updateDetalleOrdenCompraDto) {
        return `This action updates a #${id} detalleOrdenCompra`;
    }
    remove(id) {
        return `This action removes a #${id} detalleOrdenCompra`;
    }
};
exports.DetalleOrdenComprasService = DetalleOrdenComprasService;
exports.DetalleOrdenComprasService = DetalleOrdenComprasService = __decorate([
    (0, common_1.Injectable)()
], DetalleOrdenComprasService);
//# sourceMappingURL=detalle-orden-compras.service.js.map