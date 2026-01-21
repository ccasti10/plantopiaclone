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
exports.OrdenCompra = void 0;
const swagger_1 = require("@nestjs/swagger");
const enum_orden_compra_1 = require("./enum-orden-compra");
const despacho_entity_1 = require("../../despachos/entities/despacho.entity");
class OrdenCompra {
    constructor(id, fechaOC, estadoOC, emailComprador, idCliente, despacho, detalle) {
        this.id = id;
        this.fechaOC = fechaOC;
        this.estadoOC = estadoOC;
        this.emailComprador = emailComprador;
        this.idCliente = idCliente;
        this.despacho = despacho;
        this.detalle = detalle;
    }
}
exports.OrdenCompra = OrdenCompra;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrdenCompra.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], OrdenCompra.prototype, "fechaOC", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrdenCompra.prototype, "estadoOC", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrdenCompra.prototype, "emailComprador", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrdenCompra.prototype, "idCliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", despacho_entity_1.Despacho)
], OrdenCompra.prototype, "despacho", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], OrdenCompra.prototype, "detalle", void 0);
//# sourceMappingURL=orden-compra.entity.js.map