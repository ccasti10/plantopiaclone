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
exports.Planta = void 0;
const swagger_1 = require("@nestjs/swagger");
const producto_entity_1 = require("../../productos/entities/producto.entity");
const enum_plantas_1 = require("./enum-plantas");
class Planta extends producto_entity_1.Producto {
    constructor(idProducto, nombreProducto, imagenProducto, descuento, precioNormal, coberturaDeDespacho, stock, descripcionProducto, idCategoria, valoracion, cantidadVentas, codigoProducto, habitat, luz, frecuenciaDeRiego, humedadIdeal, temperaturaIdeal, toxicidadMascotas, tamanoMaximo, tipoSuelo, dificultadDeCuidado, estacion, fertilizantesSugeridos, sustratosSugeridos) {
        super(idProducto, nombreProducto, imagenProducto, descuento, precioNormal, coberturaDeDespacho, stock, descripcionProducto, idCategoria, valoracion, cantidadVentas, codigoProducto);
        this.habitat = habitat;
        this.luz = luz;
        this.frecuenciaDeRiego = frecuenciaDeRiego;
        this.humedadIdeal = humedadIdeal;
        this.temperaturaIdeal = temperaturaIdeal;
        this.toxicidadMascotas = toxicidadMascotas;
        this.tamanoMaximo = tamanoMaximo;
        this.tipoSuelo = tipoSuelo;
        this.dificultadDeCuidado = dificultadDeCuidado;
        this.estacion = estacion;
        this.fertilizantesSugeridos = fertilizantesSugeridos;
        this.sustratosSugeridos = sustratosSugeridos;
    }
}
exports.Planta = Planta;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Planta.prototype, "habitat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Planta.prototype, "luz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Planta.prototype, "frecuenciaDeRiego", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Planta.prototype, "humedadIdeal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Planta.prototype, "temperaturaIdeal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], Planta.prototype, "toxicidadMascotas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Planta.prototype, "tamanoMaximo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Planta.prototype, "tipoSuelo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Planta.prototype, "dificultadDeCuidado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Planta.prototype, "estacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Planta.prototype, "fertilizantesSugeridos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Planta.prototype, "sustratosSugeridos", void 0);
//# sourceMappingURL=planta.entity.js.map