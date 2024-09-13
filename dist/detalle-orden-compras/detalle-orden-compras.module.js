"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleOrdenComprasModule = void 0;
const common_1 = require("@nestjs/common");
const detalle_orden_compras_controller_1 = require("./controller/detalle-orden-compras.controller");
const detalle_orden_compras_service_1 = require("./service/detalle-orden-compras.service");
let DetalleOrdenComprasModule = class DetalleOrdenComprasModule {
};
exports.DetalleOrdenComprasModule = DetalleOrdenComprasModule;
exports.DetalleOrdenComprasModule = DetalleOrdenComprasModule = __decorate([
    (0, common_1.Module)({
        controllers: [detalle_orden_compras_controller_1.DetalleOrdenComprasController],
        providers: [detalle_orden_compras_service_1.DetalleOrdenComprasService],
        exports: [detalle_orden_compras_service_1.DetalleOrdenComprasService]
    })
], DetalleOrdenComprasModule);
//# sourceMappingURL=detalle-orden-compras.module.js.map