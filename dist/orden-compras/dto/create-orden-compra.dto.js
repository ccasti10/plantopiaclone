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
exports.CreateOrdenCompraDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_detalle_orden_compra_dto_1 = require("../../detalle-orden-compras/dto/create-detalle-orden-compra.dto");
class CreateOrdenCompraDto {
}
exports.CreateOrdenCompraDto = CreateOrdenCompraDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "rodrigoc@gmail.com", description: "Correo electrónico del usuario (debe ser un correo con formato válido)" }),
    (0, class_validator_1.IsEmail)({}, { message: "El email debe ser un correo electrónico válido" }),
    __metadata("design:type", String)
], CreateOrdenCompraDto.prototype, "emailComprador", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'id Cliente',
        example: 1,
        default: 0
    }),
    __metadata("design:type", Number)
], CreateOrdenCompraDto.prototype, "idCliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [create_detalle_orden_compra_dto_1.CreateDetalleOrdenCompraDto],
        description: 'Lista de detalles con los productos y cantidades',
        example: [
            { idProducto: '1', cantidad: 2, precio: 1500, descuento: 0 },
            { idProducto: '2', cantidad: 1, precio: 2500, descuento: 0 }
        ]
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_detalle_orden_compra_dto_1.CreateDetalleOrdenCompraDto),
    __metadata("design:type", Array)
], CreateOrdenCompraDto.prototype, "detalle", void 0);
//# sourceMappingURL=create-orden-compra.dto.js.map