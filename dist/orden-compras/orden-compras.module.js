"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenComprasModule = void 0;
const common_1 = require("@nestjs/common");
const orden_compras_controller_1 = require("./controller/orden-compras.controller");
const orden_compras_service_1 = require("./service/orden-compras.service");
const detalle_orden_compras_module_1 = require("../detalle-orden-compras/detalle-orden-compras.module");
const productos_module_1 = require("../productos/productos.module");
let OrdenComprasModule = class OrdenComprasModule {
};
exports.OrdenComprasModule = OrdenComprasModule;
exports.OrdenComprasModule = OrdenComprasModule = __decorate([
    (0, common_1.Module)({
        controllers: [orden_compras_controller_1.OrdenComprasController],
        providers: [orden_compras_service_1.OrdenComprasService],
        imports: [detalle_orden_compras_module_1.DetalleOrdenComprasModule, productos_module_1.ProductosModule]
    })
], OrdenComprasModule);
//# sourceMappingURL=orden-compras.module.js.map