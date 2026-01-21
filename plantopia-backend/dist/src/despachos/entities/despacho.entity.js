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
exports.Despacho = void 0;
const swagger_1 = require("@nestjs/swagger");
const enum_despachos_1 = require("./enum-despachos");
class Despacho {
}
exports.Despacho = Despacho;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'id',
        example: 1,
    }),
    __metadata("design:type", Number)
], Despacho.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'fecha Estimada Entrega',
        example: '30/08/2024',
    }),
    __metadata("design:type", Date)
], Despacho.prototype, "fechaEstimada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Estado Despacho',
        enum: enum_despachos_1.EstadosDespacho, example: enum_despachos_1.EstadosDespacho.EN_CAMINO,
    }),
    __metadata("design:type", String)
], Despacho.prototype, "EstadosDespacho", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Nro Seguimiento',
        example: 152525,
        default: 0
    }),
    __metadata("design:type", Number)
], Despacho.prototype, "nroSeguimiento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Proveedor Despacho',
        example: 'Blue-Express'
    }),
    __metadata("design:type", String)
], Despacho.prototype, "proveedorDespacho", void 0);
//# sourceMappingURL=despacho.entity.js.map