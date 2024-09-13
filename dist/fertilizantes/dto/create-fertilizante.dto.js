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
class CreateFertilizanteDto extends create_producto_dto_1.CreateProductoDto {
}
exports.CreateFertilizanteDto = CreateFertilizanteDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Fertilizante equilibrado 20-20-20',
    }),
    __metadata("design:type", String)
], CreateFertilizanteDto.prototype, "nombreProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1200,
    }),
    __metadata("design:type", Number)
], CreateFertilizanteDto.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2500,
    }),
    __metadata("design:type", Number)
], CreateFertilizanteDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'http://default.com/fertilizante.jpg'
    }),
    __metadata("design:type", String)
], CreateFertilizanteDto.prototype, "imagen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'marca Fertilizante',
        example: 'MasVida'
    }),
    __metadata("design:type", String)
], CreateFertilizanteDto.prototype, "marca", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Composicion (NPK)',
        example: '20-20-20'
    }),
    __metadata("design:type", String)
], CreateFertilizanteDto.prototype, "composici\u00F3n", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo Fertilizante',
        enum: enum_fertilizantes_1.TipoFertizante, example: enum_fertilizantes_1.TipoFertizante.EQUILIBRADO_LIQUIDO,
    }),
    __metadata("design:type", String)
], CreateFertilizanteDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Frecuencia Aplicacion',
        example: 'Cada 2 semanas en primavera y verano'
    }),
    __metadata("design:type", String)
], CreateFertilizanteDto.prototype, "frecuenciaAplicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Presentacion Fertilizante',
        example: '500 cc'
    }),
    __metadata("design:type", String)
], CreateFertilizanteDto.prototype, "presentacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'observaciones',
        example: ' Adecuado para plantas que requieren un balance NPK equilibrado.'
    }),
    __metadata("design:type", String)
], CreateFertilizanteDto.prototype, "observaciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo Plantas Recomendadas',
        enum: enum_fertilizantes_1.TipoPlantasRecomendadas, example: enum_fertilizantes_1.TipoPlantasRecomendadas.PLANTAS_INTERIOR,
    }),
    __metadata("design:type", String)
], CreateFertilizanteDto.prototype, "tiposPlantasRecomendadas", void 0);
//# sourceMappingURL=create-fertilizante.dto.js.map