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
const enum_sustratos_1 = require("./enum-sustratos");
const swagger_1 = require("@nestjs/swagger");
const enum_fertilizantes_1 = require("../../fertilizantes/entities/enum-fertilizantes");
const enum_productos_1 = require("../../productos/entities/enum-productos");
const class_validator_1 = require("class-validator");
class Sustrato extends producto_entity_1.Producto {
}
exports.Sustrato = Sustrato;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'idSustrato',
        example: 1,
        description: 'Identificador del sustrato autoincremental',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], Sustrato.prototype, "idSustrato", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'categoria',
        example: enum_productos_1.TipoProductos.Sustratos,
        description: 'Tipo de producto a crear (Sustrato)',
    }),
    (0, class_validator_1.IsEnum)(enum_productos_1.TipoProductos),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Sustrato.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'nombreProducto',
        example: 'Mezcla para plantas de interior con perlita',
        description: 'Nombre del producto',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Sustrato.prototype, "nombreProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'urlImagen',
        example: 'http://default.com/sustrato1.jpg',
        description: 'URL de la imagen del producto',
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUrl)({}, { each: true }),
    __metadata("design:type", Array)
], Sustrato.prototype, "urlImagen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'descripcionProducto',
        example: 'descripcion del producto sustrato',
        description: 'Descripción del producto en stock',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Sustrato.prototype, "descripcionProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'valorProducto',
        example: 5000,
        description: 'Valor del producto',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], Sustrato.prototype, "valorProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'descuento',
        example: 0,
        description: 'Descuento del producto',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], Sustrato.prototype, "descuento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'valorNormal',
        example: 8000,
        description: 'Valor normal del producto',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], Sustrato.prototype, "valorNormal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'composicion',
        enum: enum_sustratos_1.ComposicionSustrato,
        example: 'Turba, Perlita',
        description: 'Composición del sustrato',
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(enum_sustratos_1.ComposicionSustrato, { each: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], Sustrato.prototype, "composicion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'textura',
        enum: enum_sustratos_1.TexturaSustrato,
        example: 'Ligero, Aireado',
        description: 'Textura del sustrato',
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(enum_sustratos_1.TexturaSustrato, { each: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], Sustrato.prototype, "textura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'retencionDeHumedad',
        enum: enum_sustratos_1.RetencionHumedad,
        example: 'Media',
        description: 'Retención de humedad del sustrato',
    }),
    (0, class_validator_1.IsEnum)(enum_sustratos_1.RetencionHumedad),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Sustrato.prototype, "retencionDeHumedad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'drenaje',
        example: 'Bueno',
        description: 'Drenaje del sustrato',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Sustrato.prototype, "drenaje", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'plantasRecomendadas',
        enum: enum_fertilizantes_1.TipoPlantasRecomendadas,
        example: enum_fertilizantes_1.TipoPlantasRecomendadas.PLANTAS_INTERIOR,
        description: 'Tipo de plantas recomendadas',
    }),
    (0, class_validator_1.IsEnum)(enum_fertilizantes_1.TipoPlantasRecomendadas),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Sustrato.prototype, "plantasRecomendadas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'observaciones',
        example: 'Ideal para plantas de interior que necesitan un buen equilibrio entre retención de humedad y drenaje.',
        description: 'Observaciones del sustrato',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Sustrato.prototype, "observaciones", void 0);
//# sourceMappingURL=sustrato.entity.js.map