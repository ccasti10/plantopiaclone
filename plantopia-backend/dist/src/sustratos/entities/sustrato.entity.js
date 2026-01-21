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
exports.Sustrato = void 0;
const producto_entity_1 = require("../../productos/entities/producto.entity");
const swagger_1 = require("@nestjs/swagger");
const enum_fertilizantes_1 = require("../../fertilizantes/entities/enum-fertilizantes");
class Sustrato extends producto_entity_1.Producto {
    constructor(idProducto, nombreProducto, imagenProducto, descuento, precioNormal, coberturaDeDespacho, stock, descripcionProducto, idCategoria, valoracion, cantidadVentas, codigoProducto, composicion, textura, drenaje, plantasRecomendadas, observaciones) {
        super(idProducto, nombreProducto, imagenProducto, descuento, precioNormal, coberturaDeDespacho, stock, descripcionProducto, idCategoria, valoracion, cantidadVentas, codigoProducto);
        this.composicion = composicion;
        this.textura = textura;
        this.drenaje = drenaje;
        this.plantasRecomendadas = plantasRecomendadas;
        this.observaciones = observaciones;
    }
}
exports.Sustrato = Sustrato;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Sustrato.prototype, "composicion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Sustrato.prototype, "textura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Sustrato.prototype, "drenaje", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Sustrato.prototype, "plantasRecomendadas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Sustrato.prototype, "observaciones", void 0);
//# sourceMappingURL=sustrato.entity.js.map