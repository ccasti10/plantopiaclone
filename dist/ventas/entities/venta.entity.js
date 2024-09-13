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
exports.Venta = void 0;
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
const swagger_1 = require("@nestjs/swagger");
const producto_entity_1 = require("../../productos/entities/producto.entity");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class Venta {
}
exports.Venta = Venta;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'idventa',
        example: 1,
        description: 'Identificador de la venta',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], Venta.prototype, "idventa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Productos de la venta',
        type: [producto_entity_1.Producto],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => producto_entity_1.Producto),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], Venta.prototype, "idproducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cantidad de productos',
        example: [1, 2],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.Min)(1, { each: true }),
    __metadata("design:type", Array)
], Venta.prototype, "cantidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total de la venta',
        example: 100000,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], Venta.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de la venta',
        example: new Date(),
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], Venta.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descuento de la venta',
        example: 10000,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], Venta.prototype, "totaldescto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cliente que realiza la compra',
        type: usuario_entity_1.Usuario,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => usuario_entity_1.Usuario),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", usuario_entity_1.Usuario)
], Venta.prototype, "rutcliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado de la venta',
        example: 'Pendiente',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Venta.prototype, "estado", void 0);
//# sourceMappingURL=venta.entity.js.map