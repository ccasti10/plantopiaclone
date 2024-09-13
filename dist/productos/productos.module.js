"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosModule = void 0;
const common_1 = require("@nestjs/common");
const maceteros_module_1 = require("../maceteros/maceteros.module");
const productos_controller_1 = require("./controller/productos.controller");
const productos_service_1 = require("./service/productos.service");
let ProductosModule = class ProductosModule {
};
exports.ProductosModule = ProductosModule;
exports.ProductosModule = ProductosModule = __decorate([
    (0, common_1.Module)({
        controllers: [productos_controller_1.ProductosController],
        providers: [productos_service_1.ProductosService],
        imports: [maceteros_module_1.MaceterosModule],
        exports: [productos_service_1.ProductosService]
    })
], ProductosModule);
//# sourceMappingURL=productos.module.js.map