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
exports.DespachosService = void 0;
const common_1 = require("@nestjs/common");
const ver_despachos_dto_1 = require("./dto/ver-despachos-dto");
const enum_despachos_1 = require("./entities/enum-despachos");
let DespachosService = class DespachosService {
    constructor() {
        this.seguimiento = [];
        let sigueCompra = new ver_despachos_dto_1.VerDespachos();
        sigueCompra.EstadosDespacho = enum_despachos_1.EstadosDespacho.EN_CAMINO;
        sigueCompra.fechaEstimada = new Date('2024/08/31');
        sigueCompra.nroSeguimiento = 152525;
        sigueCompra.proveedorDespacho = 'Blue-Express';
        this.seguimiento.push(sigueCompra);
    }
    findOne(id) {
        return this.seguimiento;
    }
};
exports.DespachosService = DespachosService;
exports.DespachosService = DespachosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DespachosService);
//# sourceMappingURL=despachos.service.js.map