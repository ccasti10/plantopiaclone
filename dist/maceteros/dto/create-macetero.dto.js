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
exports.CreateMaceteroDto = void 0;
const create_producto_dto_1 = require("../../productos/dto/create-producto.dto");
const swagger_1 = require("@nestjs/swagger");
const enum_macetero_1 = require("../entities/enum-macetero");
const class_validator_1 = require("class-validator");
class CreateMaceteroDto extends create_producto_dto_1.CreateProductoDto {
}
exports.CreateMaceteroDto = CreateMaceteroDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Altura de macetero expresado en cm',
        example: 15
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(5, { message: 'El alto del macetero debe ser al menos 5 cm' }),
    (0, class_validator_1.Max)(150, { message: 'El alto del macetero no puede ser mayor que 150 cm' }),
    __metadata("design:type", Number)
], CreateMaceteroDto.prototype, "alto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ancho de macetero expresado en cm',
        example: 15
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(5, { message: 'El ancho del macetero debe ser al menos 5 cm' }),
    (0, class_validator_1.Max)(100, { message: 'El ancho del macetero debe serno puede ser mayor que 100 cm' }),
    __metadata("design:type", Number)
], CreateMaceteroDto.prototype, "ancho", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'peso de macetero expresado en kilos',
        example: 15
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.1, { message: 'El ancho del macetero debe ser al menos 0.1 kilos' }),
    __metadata("design:type", Number)
], CreateMaceteroDto.prototype, "peso", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'capacidad de macetero expresado en litros',
        example: 13
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.5, { message: 'El ancho del macetero debe ser al menos 0.5 litros' }),
    __metadata("design:type", Number)
], CreateMaceteroDto.prototype, "capacidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'material del macetero',
        example: 13
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'No puede estar vacio el material del macetero' }),
    __metadata("design:type", String)
], CreateMaceteroDto.prototype, "material", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'color del macetero',
        example: 13
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'No puede estar vacio el color del macetero' }),
    __metadata("design:type", String)
], CreateMaceteroDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Enum Tipo Producto',
        enum: enum_macetero_1.FormaMacetero, example: enum_macetero_1.FormaMacetero.Circular
    }),
    (0, class_validator_1.IsEnum)(enum_macetero_1.FormaMacetero, { message: 'El valor debe ser una forma de macetero válida' }),
    __metadata("design:type", String)
], CreateMaceteroDto.prototype, "forma", void 0);
//# sourceMappingURL=create-macetero.dto.js.map