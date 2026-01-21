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
exports.ControlPlagas = void 0;
const swagger_1 = require("@nestjs/swagger");
const producto_entity_1 = require("../../productos/entities/producto.entity");
const enum_control_plagas_1 = require("./enum-control-plagas");
class ControlPlagas extends producto_entity_1.Producto {
    constructor(idProducto, nombreProducto, imagenProducto, descuento, precioNormal, coberturaDeDespacho, stock, descripcionProducto, idCategoria, valoracion, cantidadVentas, codigoProducto, tipoPlagaControlada, composicion, metodoAplicacion, frecuenciaAplicacion, precauciones, eficacia, Toxicidad) {
        super(idProducto, nombreProducto, imagenProducto, descuento, precioNormal, coberturaDeDespacho, stock, descripcionProducto, idCategoria, valoracion, cantidadVentas, codigoProducto);
        this.TipoPlagaControlada = tipoPlagaControlada;
        this.composicion = composicion;
        this.metodoAplicacion = metodoAplicacion;
        this.frecuenciaAplicacion = frecuenciaAplicacion;
        this.precauciones = precauciones;
        this.eficacia = eficacia;
        this.Toxicidad = Toxicidad;
    }
}
exports.ControlPlagas = ControlPlagas;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ControlPlagas.prototype, "TipoPlagaControlada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ControlPlagas.prototype, "composicion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ControlPlagas.prototype, "metodoAplicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ControlPlagas.prototype, "frecuenciaAplicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ControlPlagas.prototype, "precauciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ControlPlagas.prototype, "eficacia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ControlPlagas.prototype, "Toxicidad", void 0);
//# sourceMappingURL=control-plagas.entity.js.map