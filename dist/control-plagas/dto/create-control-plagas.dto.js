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
exports.CreateControlPlagasDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_producto_dto_1 = require("../../productos/dto/create-producto.dto");
const enum_control_plagas_1 = require("../entities/enum-control-plagas");
class CreateControlPlagasDto extends create_producto_dto_1.CreateProductoDto {
}
exports.CreateControlPlagasDto = CreateControlPlagasDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Aceite de neem',
    }),
    __metadata("design:type", String)
], CreateControlPlagasDto.prototype, "nombreProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 150,
    }),
    __metadata("design:type", Number)
], CreateControlPlagasDto.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 8750,
    }),
    __metadata("design:type", Number)
], CreateControlPlagasDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'http://default.com/controlplaga.jpg'
    }),
    __metadata("design:type", String)
], CreateControlPlagasDto.prototype, "imagen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [enum_control_plagas_1.TipoPlaga],
        isArray: true,
        description: 'Lista de Plagas controladas',
        example: ['Pulgones', 'Cochinillas', 'Acaros']
    }),
    __metadata("design:type", Array)
], CreateControlPlagasDto.prototype, "TipoPlagaControlada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [enum_control_plagas_1.ComposicionControlPlaga],
        isArray: true,
        description: 'Lista de Composicion Producto ',
        example: ['Aceite de neem(azadiractina) ']
    }),
    __metadata("design:type", Array)
], CreateControlPlagasDto.prototype, "composicion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [enum_control_plagas_1.MetodoAplicacion],
        isArray: true,
        description: 'Metodos de Aplicacion Producto',
        example: ['Spray foliar']
    }),
    __metadata("design:type", Array)
], CreateControlPlagasDto.prototype, "metodoAplicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'frecuencia Aplicacion',
        example: 'Cada 7-14 días según la infestación'
    }),
    __metadata("design:type", String)
], CreateControlPlagasDto.prototype, "frecuenciaAplicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'precauciones',
        example: 'Seguridad para mascotas, evitar el contacto directo con ojos y piel'
    }),
    __metadata("design:type", String)
], CreateControlPlagasDto.prototype, "precauciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Eficacia',
        example: enum_control_plagas_1.Eficacia.ALTA,
        enum: enum_control_plagas_1.Eficacia,
    }),
    __metadata("design:type", String)
], CreateControlPlagasDto.prototype, "eficacia", void 0);
//# sourceMappingURL=create-control-plagas.dto.js.map