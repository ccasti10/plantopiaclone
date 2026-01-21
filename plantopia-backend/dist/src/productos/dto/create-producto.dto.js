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
        example: 'Girasol',
        required: true,
        type: 'string',
        maxLength: 60,
        nullable: false
    }),
    (0, class_validator_1.IsString)({ message: 'El nombre producto debe ser texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre producto es campo obligatorio' }),
    (0, class_validator_1.MaxLength)(60, { message: 'El nombre del producto no puede tener más de 60 caracteres' }),
    __metadata("design:type", String)
], CreateProductoDto.prototype, "nombreProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'imagenProducto',
        description: 'Lista de Url de la imagenes de un producto',
        example: [
            'https://example.com/imagen_1.jpg',
            'https://example.com/imagen_1_d.jpg',
        ],
        required: true,
        type: [String],
        isArray: true,
        default: ['https://imagenes/sin_imagen.png']
    }),
    (0, class_validator_1.IsArray)({ message: 'El campo debe ser un array de URLs' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'La lista de URLs no puede estar vacía' }),
    (0, class_validator_1.IsUrl)({}, { each: true, message: 'Cada URL debe ser válida' }),
    __metadata("design:type", Array)
], CreateProductoDto.prototype, "imagenProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'descuento',
        type: Number,
        description: 'descuento en el precio del producto',
        required: true,
        minimum: 0,
        example: 0,
        default: 0,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'El descuento debe ser un número' }),
    (0, class_validator_1.Min)(0, { message: 'El descuento debe ser al menos 0' }),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "descuento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'precioNormal',
        type: Number,
        description: 'Precio normal del producto sin descuento',
        example: 50000,
        required: true,
        minimum: 100,
        maximum: 1000000,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'El precio normal debe ser un número' }),
    (0, class_validator_1.Min)(100, { message: 'El precio normal del producto debe ser al mayor igual a 100' }),
    (0, class_validator_1.Max)(1000000, { message: 'El precio normal del producto debe ser menor igual a 1000000' }),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "precioNormal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'coberturaDeDespacho',
        description: 'Lista de lugares de cobertura de un producto',
        example: ['Region Metropolitana', 'Region Valparaiso'],
        required: true,
        type: [String],
        isArray: true,
    }),
    (0, class_validator_1.IsArray)({ message: 'El campo debe ser un array de lugares' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'La lista de lugares no puede estar vacía' }),
    __metadata("design:type", Array)
], CreateProductoDto.prototype, "coberturaDeDespacho", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'stock',
        type: Number,
        description: 'stock del producto sin descuento',
        example: 100,
        required: true,
        minimum: 1,
        maximum: 100000,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'El stock debe ser un número' }),
    (0, class_validator_1.Min)(1, { message: 'El stock del producto debe ser al mayor igual a 1' }),
    (0, class_validator_1.Max)(100000, { message: 'El stock del producto debe ser menor igual a 100000' }),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'descripcionProducto',
        description: 'Descripcion Breve  del Producto',
        example: 'Es una planta ornamental conocida por sus hojas frondosas y de forma delicada, que crecen en racimos y tienen una textura plumosa. Es ideal para interiores, donde añade un toque de frescura y verdor a cualquier ambiente. También puede crecer en exteriores en climas húmedos y sombreados.',
        required: true,
        type: 'string',
        minLength: 10,
        maxLength: 500,
        nullable: false
    }),
    (0, class_validator_1.IsString)({ message: 'Descripcion del producto debe ser texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Descripcion del producto es campo obligatorio' }),
    (0, class_validator_1.MaxLength)(500, { message: 'Descripcion del producto no puede tener más de 500 caracteres' }),
    (0, class_validator_1.MaxLength)(500, { message: 'Descripcion del producto no puede tener más de 500 caracteres' }),
    __metadata("design:type", String)
], CreateProductoDto.prototype, "descripcionProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'categoria',
        description: 'Enum Tipo Producto',
        enum: enum_productos_1.TipoProductos,
        example: enum_productos_1.TipoProductos.Macetero,
    }),
    (0, class_validator_1.IsEnum)(enum_productos_1.TipoProductos, {
        message: 'El valor debe ser una tipo de producto válido',
    }),
    __metadata("design:type", String)
], CreateProductoDto.prototype, "categoria", void 0);
//# sourceMappingURL=create-producto.dto.js.map