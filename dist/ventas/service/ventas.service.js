"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentasService = void 0;
const common_1 = require("@nestjs/common");
let VentasService = class VentasService {
    create(createVentaDto) {
        return 'This action adds a new venta';
    }
    findAll() {
        return `Modulo de Ventas - Epica de Ventas // Retorna todas las ventas`;
    }
    findOne(id) {
        return `This action returns a #${id} venta`;
    }
    update(id, updateVentaDto) {
        return `This action updates a #${id} venta`;
    }
    remove(id) {
        return `This action removes a #${id} venta`;
    }
};
exports.VentasService = VentasService;
exports.VentasService = VentasService = __decorate([
    (0, common_1.Injectable)()
], VentasService);
//# sourceMappingURL=ventas.service.js.map