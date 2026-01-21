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
exports.CreateFertilizanteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_producto_dto_1 = require("../../productos/dto/create-producto.dto");
const enum_fertilizantes_1 = require("../entities/enum-fertilizantes");
const class_validator_1 = require("class-validator");
const enum_productos_1 = require("../../productos/entities/enum-productos");
class CreateFertilizanteDto extends create_producto_dto_1.CreateProductoDto {
}
exports.CreateFertilizanteDto = CreateFertilizanteDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'categoria',
        description: 'Enum Tipo Producto',
        enum: enum_productos_1.TipoProductos, example: enum_productos_1.TipoProductos.Fertilizantes
    }),
    __metadata("design:type", String)
], CreateFertilizanteDto.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'composición',
        description: 'Composicion (NPK)',
        example: '20-20-20',
        required: true,
        type: 'string',
        minLength: 5,
        maxLength: 200,
        nullable: false
    }),
    (0, class_validator_1.IsString)({ message: 'La Composicion (NPK) debe ser texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La Composicion (NPK) es campo obligatorio' }),
    (0, class_validator_1.MinLength)(5, { message: 'Largo de la Composicion (NPK) debe ser mayor igual  de 5 caracteres' }),
    (0, class_validator_1.MaxLength)(200, { message: 'Largo de la Composicion (NPK) debe ser menor igual  de 200 caracteres' }),
    __metadata("design:type", String)
], CreateFertilizanteDto.prototype, "composici\u00F3n", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enum_fertilizantes_1.TipoFertizante),
    (0, swagger_1.ApiProperty)({
        description: 'Tipo Fertilizante',
        enum: enum_fertilizantes_1.TipoFertizante, example: enum_fertilizantes_1.TipoFertizante.EQUILIBRADO_LIQUIDO,
    }),
    __metadata("design:type", String)
], CreateFertilizanteDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'frecuenciaAplicacion',
        description: 'Frecuencia Aplicacion',
        example: 'Cada 2 semanas en primavera y verano',
        required: true,
        type: 'string',
        minLength: 5,
        maxLength: 200,
        nullable: false
    }),
    (0, class_validator_1.IsString)({ message: 'La Frecuencia Aplicacion debe ser texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La Frecuencia Aplicacion es campo obligatorio' }),
    (0, class_validator_1.MinLength)(5, { message: 'Largo de la Frecuencia Aplicacion debe ser mayor igual  de 5 caracteres' }),
    (0, class_validator_1.MaxLength)(200, { message: 'Largo de la Frecuencia Aplicacion debe ser menor igual  de 200 caracteres' }),
    __metadata("design:type", String)
], CreateFertilizanteDto.prototype, "frecuenciaAplicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'presentacion',
        description: 'Presentacion Fertilizante',
        example: '500 cc',
        required: true,
        type: 'string',
        minLength: 5,
        maxLength: 100,
        nullable: false
    }),
    (0, class_validator_1.IsString)({ message: 'La presentacion del fertilizante debe ser texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La presentacion del fertilizante debe ser campo obligatorio' }),
    (0, class_validator_1.MinLength)(5, { message: 'Largo de la presentacion del fertilizante debe ser mayor igual  de 5 caracteres' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Largo de la presentacion del fertilizante debe ser menor igual  de 100 caracteres' }),
    __metadata("design:type", String)
], CreateFertilizanteDto.prototype, "presentacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'observaciones',
        description: 'observaciones',
        example: ' Adecuado para plantas que requieren un balance NPK equilibrado.',
        required: true,
        type: 'string',
        minLength: 5,
        maxLength: 100,
        nullable: false
    }),
    (0, class_validator_1.IsString)({ message: 'Las observaciones del fertilizante debe ser texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Las observaciones del fertilizante debe ser campo obligatorio' }),
    (0, class_validator_1.MinLength)(5, { message: 'Largo de las observaciones del fertilizante debe ser mayor igual  de 5 caracteres' }),
    (0, class_validator_1.MaxLength)(500, { message: 'Largo de las observaciones del fertilizante debe ser menor igual  de 500 caracteres' }),
    __metadata("design:type", String)
], CreateFertilizanteDto.prototype, "observaciones", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enum_fertilizantes_1.TipoPlantasRecomendadas),
    (0, swagger_1.ApiProperty)({
        description: 'Tipo Plantas Recomendadas',
        enum: enum_fertilizantes_1.TipoPlantasRecomendadas, example: enum_fertilizantes_1.TipoPlantasRecomendadas.PLANTAS_INTERIOR,
    }),
    __metadata("design:type", String)
], CreateFertilizanteDto.prototype, "tiposPlantasRecomendadas", void 0);
//# sourceMappingURL=create-fertilizante.dto.js.map