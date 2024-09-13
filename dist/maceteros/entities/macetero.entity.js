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
exports.Macetero = void 0;
const swagger_1 = require("@nestjs/swagger");
const producto_entity_1 = require("../../productos/entities/producto.entity");
const enum_macetero_1 = require("./enum-macetero");
class Macetero extends producto_entity_1.Producto {
    constructor(idProducto, nombreProducto, imagenProducto, descuento, precioNormal, coberturaDeDespacho, stock, descripcionProducto, idCategoria, valoracion, cantidadVentas, codigoProducto, alto, ancho, peso, capacidad, material, color, forma) {
        super(idProducto, nombreProducto, imagenProducto, descuento, precioNormal, coberturaDeDespacho, stock, descripcionProducto, idCategoria, valoracion, cantidadVentas, codigoProducto);
        this.alto = alto;
        this.ancho = ancho;
        this.peso = peso;
        this.capacidad = capacidad;
        this.material = material;
        this.color = color;
        this.forma = forma;
    }
}
exports.Macetero = Macetero;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Macetero.prototype, "alto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Macetero.prototype, "ancho", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Macetero.prototype, "peso", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Macetero.prototype, "capacidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Macetero.prototype, "material", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Macetero.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Macetero.prototype, "forma", void 0);
//# sourceMappingURL=macetero.entity.js.map