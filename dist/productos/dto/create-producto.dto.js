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
exports.CreateProductoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const enum_productos_1 = require("../entities/enum-productos");
const class_validator_1 = require("class-validator");
class CreateProductoDto {
}
exports.CreateProductoDto = CreateProductoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'nombreProducto',
        description: 'Nombre del Producto',
        example: 'nomnbre producto',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'No puede estar vacio el nombre del producto' }),
    __metadata("design:type", String)
], CreateProductoDto.prototype, "nombreProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'imagenProducto',
        description: 'URL de la imagen del producto',
        example: ['http://example.com/imagen_1.jpg', 'http://example.com/imagen_1_d.jpg'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'No puede estar vacio la imagen del producto' }),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateProductoDto.prototype, "imagenProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'descuento',
        description: 'descuento en el precio del producto',
        example: 0,
        default: 0
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0, { message: 'El descuento debe ser al menos 0' }),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "descuento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'precioNormal',
        description: 'Precio normal del producto sin descuento',
        example: 50000,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1000, { message: 'El valor del producto debe ser al menos 1000' }),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "precioNormal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'coberturaDeDespacho',
        description: 'cobertura despacho producto',
        example: ['Region Metropolitana', 'Region Valparaiso'],
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateProductoDto.prototype, "coberturaDeDespacho", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'stock',
        description: 'Cantidad de stock disponible',
        example: 100,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1, { message: 'El stock del producto debe ser al menos 1' }),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'descripcionProducto',
        description: 'breve descripcion del producto',
        example: 'Plan especial para decorarar depto.'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductoDto.prototype, "descripcionProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'categoria',
        description: 'Enum Tipo Producto',
        enum: enum_productos_1.TipoProductos, example: enum_productos_1.TipoProductos.Macetero
    }),
    (0, class_validator_1.IsEnum)(enum_productos_1.TipoProductos, { message: 'El valor debe ser una tipo de producto válido' }),
    __metadata("design:type", String)
], CreateProductoDto.prototype, "categoria", void 0);
//# sourceMappingURL=create-producto.dto.js.map