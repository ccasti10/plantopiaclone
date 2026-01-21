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
exports.CreateSustratoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const enum_fertilizantes_1 = require("../../fertilizantes/entities/enum-fertilizantes");
const create_producto_dto_1 = require("../../productos/dto/create-producto.dto");
const enum_sustratos_1 = require("../entities/enum-sustratos");
const enum_productos_1 = require("../../productos/entities/enum-productos");
const class_validator_1 = require("class-validator");
class CreateSustratoDto extends create_producto_dto_1.CreateProductoDto {
}
exports.CreateSustratoDto = CreateSustratoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Categoría del producto',
        example: enum_productos_1.TipoProductos.Sustratos,
        enum: enum_productos_1.TipoProductos,
    }),
    (0, class_validator_1.IsEnum)(enum_productos_1.TipoProductos),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSustratoDto.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'composicion',
        enum: enum_sustratos_1.ComposicionSustrato,
        example: [enum_sustratos_1.ComposicionSustrato.CARBON_VEGETAL],
    }),
    (0, class_validator_1.IsArray)({ message: 'El valor debe ser un array de composicion de sustratos' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'La lista composicion de sustratos no puede estar vacía' }),
    (0, class_validator_1.IsEnum)(enum_sustratos_1.ComposicionSustrato, { each: true, message: 'El valor debe ser una composicion sustrato valida' }),
    __metadata("design:type", Array)
], CreateSustratoDto.prototype, "composicion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'textura',
        enum: enum_sustratos_1.TexturaSustrato,
        example: [enum_sustratos_1.TexturaSustrato.DENSO],
    }),
    (0, class_validator_1.IsArray)({ message: 'El valor debe ser un array de texturas de sustratos' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'La lista composicion de texturas no puede estar vacía' }),
    (0, class_validator_1.IsEnum)(enum_sustratos_1.TexturaSustrato, { each: true, message: 'El valor debe ser una textura sustrato valida' }),
    __metadata("design:type", Array)
], CreateSustratoDto.prototype, "textura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'retencionDeHumedad',
        enum: enum_sustratos_1.RetencionHumedad,
        example: [enum_sustratos_1.RetencionHumedad.MEDIA],
        description: 'Retención de humedad del sustrato',
    }),
    (0, class_validator_1.IsEnum)(enum_sustratos_1.RetencionHumedad, {
        message: 'El valor debe ser una retencion válido',
    }),
    __metadata("design:type", String)
], CreateSustratoDto.prototype, "retencionDeHumedad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'drenaje',
        example: 'Bueno',
        description: 'Drenaje del sustrato',
        required: true,
        type: 'string',
        maxLength: 100,
        nullable: false
    }),
    (0, class_validator_1.IsString)({ message: 'El drenaje debe ser texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El drenaje es campo obligatorio' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Largo del drenaje debe ser menor igual a 100 caracteres' }),
    __metadata("design:type", String)
], CreateSustratoDto.prototype, "drenaje", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'plantasRecomendadas',
        enum: enum_fertilizantes_1.TipoPlantasRecomendadas,
        example: enum_fertilizantes_1.TipoPlantasRecomendadas.PLANTAS_INTERIOR,
        description: 'Tipo de plantas recomendadas',
    }),
    (0, class_validator_1.IsEnum)(enum_fertilizantes_1.TipoPlantasRecomendadas, {
        message: 'El valor debe ser una tipo planta recomendada válida',
    }),
    __metadata("design:type", String)
], CreateSustratoDto.prototype, "plantasRecomendadas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'observaciones',
        example: 'Ideal para plantas de interior que necesitan un buen equilibrio entre retención de humedad y drenaje.',
        description: 'Observaciones del sustrato',
        maxLength: 500
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El color del macetero debe ser texto' }),
    (0, class_validator_1.MaxLength)(500, { message: 'Largo del color del macetero de ser menor igual a 500 caracteres' }),
    __metadata("design:type", String)
], CreateSustratoDto.prototype, "observaciones", void 0);
//# sourceMappingURL=create-sustrato.dto.js.map