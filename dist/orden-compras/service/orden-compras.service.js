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
exports.OrdenComprasService = void 0;
const common_1 = require("@nestjs/common");
const orden_compra_entity_1 = require("../entities/orden-compra.entity");
const enum_orden_compra_1 = require("../entities/enum-orden-compra");
const error_plantopia_1 = require("../../error-plantopia/error-plantopia");
const detalle_orden_compra_entity_1 = require("../../detalle-orden-compras/entities/detalle-orden-compra.entity");
const productos_service_1 = require("../../productos/service/productos.service");
const detalle_orden_compras_service_1 = require("../../detalle-orden-compras/service/detalle-orden-compras.service");
const create_detalle_orden_compra_dto_1 = require("../../detalle-orden-compras/dto/create-detalle-orden-compra.dto");
let OrdenComprasService = class OrdenComprasService {
    constructor(productoServices, detalleOrdenServices) {
        this.productoServices = productoServices;
        this.detalleOrdenServices = detalleOrdenServices;
        this.ordenesCompras = [];
        this.fechaHoy = new Date();
        this.fechaActual = String(this.fechaHoy.getFullYear()) + '-' + String(this.fechaHoy.getMonth() + 1).padStart(2, '0') + '-' + String(this.fechaHoy.getDate()).padStart(2, '0');
        this.ordenesCompras = [new orden_compra_entity_1.OrdenCompra(1, new Date(this.fechaActual), enum_orden_compra_1.EstadosOC.CREADA, 'mail1@dominio.cl', 0, null, []),
            new orden_compra_entity_1.OrdenCompra(2, new Date(this.fechaActual), enum_orden_compra_1.EstadosOC.CREADA, 'mail2@dominio.cl', 0, null, [])];
    }
    create(createOrdenCompraDto) {
        const productosCarro = createOrdenCompraDto.detalle;
        let detalleProductos = [];
        for (let i = 0; i < productosCarro.length; i++) {
            const producto = this.productoServices.findOneID(productosCarro[i].idProducto);
            const productOrden = producto.find(a => a.stock >= productosCarro[i].cantidad);
            if (!productOrden) {
                throw new error_plantopia_1.ErrorPlantopia('Stock insuficiente producto ' + productOrden.nombreProducto, 404);
            }
            const totalPrecio = productosCarro[i].cantidad * productOrden.precioNormal;
            const detalleOrden = new detalle_orden_compra_entity_1.DetalleOrdenCompra(productosCarro[i].idProducto, productosCarro[i].cantidad, productOrden.precioNormal, totalPrecio, productOrden.descuento);
            detalleProductos.push(detalleOrden);
            let detalleOrdenDto = new create_detalle_orden_compra_dto_1.CreateDetalleOrdenCompraDto();
            detalleOrdenDto.idProducto = productosCarro[i].idProducto;
            detalleOrdenDto.cantidad = productosCarro[i].cantidad;
            detalleOrdenDto.precio = productOrden.precioNormal;
            detalleOrdenDto.descuento = productOrden.descuento;
            this.detalleOrdenServices.create(detalleOrdenDto);
        }
        const idOC = this.ordenesCompras.length + 1;
        const nuevaOrden = new orden_compra_entity_1.OrdenCompra(idOC, new Date(this.fechaActual), enum_orden_compra_1.EstadosOC.CREADA, createOrdenCompraDto.emailComprador, createOrdenCompraDto.idCliente, null, detalleProductos);
        this.ordenesCompras.push(nuevaOrden);
        return 'IdOc: ' + idOC;
    }
    findAll() {
        console.log(this.fechaActual);
        return this.ordenesCompras;
    }
    findOne(id) {
        return `This action returns a #${id} ordenCompra`;
    }
    update(id, updateOrdenCompraDto) {
        return `This action updates a #${id} ordenCompra`;
    }
    remove(id) {
        return `This action removes a #${id} ordenCompra`;
    }
};
exports.OrdenComprasService = OrdenComprasService;
exports.OrdenComprasService = OrdenComprasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [productos_service_1.ProductosService, detalle_orden_compras_service_1.DetalleOrdenComprasService])
], OrdenComprasService);
//# sourceMappingURL=orden-compras.service.js.map