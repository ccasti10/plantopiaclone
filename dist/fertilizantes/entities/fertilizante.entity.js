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
exports.Fertilizante = void 0;
const swagger_1 = require("@nestjs/swagger");
const producto_entity_1 = require("../../productos/entities/producto.entity");
const enum_fertilizantes_1 = require("./enum-fertilizantes");
class Fertilizante extends producto_entity_1.Producto {
}
exports.Fertilizante = Fertilizante;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'marca Fertilizante',
        example: 'MasVida'
    }),
    __metadata("design:type", String)
], Fertilizante.prototype, "marca", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Composicion (NPK)',
        example: '20-20-20'
    }),
    __metadata("design:type", String)
], Fertilizante.prototype, "composici\u00F3n", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Tipo Fertilizante',
        enum: enum_fertilizantes_1.TipoFertizante, example: enum_fertilizantes_1.TipoFertizante.EQUILIBRADO_LIQUIDO,
    }),
    __metadata("design:type", String)
], Fertilizante.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Frecuencia Aplicacion',
        example: 'Cada 2 semanas en primavera y verano'
    }),
    __metadata("design:type", String)
], Fertilizante.prototype, "frecuenciaAplicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Presentacion Fertilizante',
        example: '500 cc'
    }),
    __metadata("design:type", String)
], Fertilizante.prototype, "presentacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'observaciones',
        example: ' Adecuado para plantas que requieren un balance NPK equilibrado.'
    }),
    __metadata("design:type", String)
], Fertilizante.prototype, "observaciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Tipo Plantas Recomendadas',
        enum: enum_fertilizantes_1.TipoPlantasRecomendadas, example: enum_fertilizantes_1.TipoPlantasRecomendadas.PLANTAS_INTERIOR,
    }),
    __metadata("design:type", String)
], Fertilizante.prototype, "tiposPlantasRecomendadas", void 0);
//# sourceMappingURL=fertilizante.entity.js.map