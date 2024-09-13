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
}
exports.Planta = Planta;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'nombreCientifico',
        example: 'Rosa rubiginosa'
    }),
    __metadata("design:type", String)
], Planta.prototype, "nombreCientifico", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Tamaño Maximo Planta en centimetros',
        example: '80'
    }),
    __metadata("design:type", Number)
], Planta.prototype, "tamano", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Cantidad de luz requerida',
        enum: enum_plantas_1.LuzRequerida, example: enum_plantas_1.LuzRequerida.ALTA,
    }),
    __metadata("design:type", String)
], Planta.prototype, "luzrequerida", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Frecuencia de riego',
        example: enum_plantas_1.FrecuenciaDeRiego.SEMANAL,
        enum: enum_plantas_1.FrecuenciaDeRiego,
    }),
    __metadata("design:type", String)
], Planta.prototype, "frecuenciaderiego", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Nivel de humedad ideal',
        example: enum_plantas_1.NivelDeHumedad.ALTA,
        enum: enum_plantas_1.NivelDeHumedad,
    }),
    __metadata("design:type", String)
], Planta.prototype, "humedadideal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Temperatura Ideal en Grados Celcius',
        example: 25,
    }),
    __metadata("design:type", Number)
], Planta.prototype, "temperaturaIdeal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Toxicidad para Mascotas',
        example: 'True',
    }),
    __metadata("design:type", Boolean)
], Planta.prototype, "toxicidadMascotas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Ambiente donde viven ',
        example: enum_plantas_1.Habitad.CUALQUIERA,
        enum: enum_plantas_1.Habitad,
    }),
    __metadata("design:type", String)
], Planta.prototype, "Habitad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Tipo de suelo',
        example: enum_plantas_1.TipoDeSuelo.ARENOSO,
        enum: enum_plantas_1.TipoDeSuelo,
    }),
    __metadata("design:type", String)
], Planta.prototype, "tiposuelo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Dificultad de cuidado',
        example: enum_plantas_1.DificultadDeCuidado.BAJA,
        enum: enum_plantas_1.DificultadDeCuidado,
    }),
    __metadata("design:type", String)
], Planta.prototype, "dificultaddecuidado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Estacion',
        example: enum_plantas_1.Estacion.PRIMAVERA,
        enum: enum_plantas_1.Estacion,
    }),
    __metadata("design:type", String)
], Planta.prototype, "estacion", void 0);
//# sourceMappingURL=planta.entity.js.map