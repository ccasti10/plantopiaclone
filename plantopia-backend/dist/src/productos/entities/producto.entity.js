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
exports.Producto = void 0;
const swagger_1 = require("@nestjs/swagger");
const enum_productos_1 = require("./enum-productos");
class Producto {
    constructor(idProducto, nombreProducto, imagenProducto, descuento, precioNormal, coberturaDeDespacho, stock, descripcionProducto, categoria, valoracion, cantidadVentas, codigoProducto) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.imagenProducto = imagenProducto;
        this.descuento = descuento;
        this.precioNormal = precioNormal;
        this.coberturaDeDespacho = coberturaDeDespacho;
        this.stock = stock;
        this.descripcionProducto = descripcionProducto;
        this.categoria = categoria;
        this.valoracion = valoracion;
        this.cantidadVentas = cantidadVentas;
        this.codigoProducto = codigoProducto;
    }
}
exports.Producto = Producto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Producto.prototype, "idProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Producto.prototype, "nombreProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Producto.prototype, "imagenProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Producto.prototype, "descuento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Producto.prototype, "precioNormal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Producto.prototype, "coberturaDeDespacho", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Producto.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Producto.prototype, "descripcionProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Producto.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Producto.prototype, "valoracion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Producto.prototype, "cantidadVentas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Producto.prototype, "codigoProducto", void 0);
//# sourceMappingURL=producto.entity.js.map