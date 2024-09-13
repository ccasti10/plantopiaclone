"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const despachos_module_1 = require("./despachos/despachos.module");
const productos_module_1 = require("./productos/productos.module");
const ventas_module_1 = require("./ventas/ventas.module");
const equipo_module_1 = require("./equipo/equipo.module");
const plantas_module_1 = require("./plantas/plantas.module");
const fertilizantes_module_1 = require("./fertilizantes/fertilizantes.module");
const sustratos_module_1 = require("./sustratos/sustratos.module");
const control_plagas_module_1 = require("./control-plagas/control-plagas.module");
const orden_compras_module_1 = require("./orden-compras/orden-compras.module");
const detalle_orden_compras_module_1 = require("./detalle-orden-compras/detalle-orden-compras.module");
const maceteros_module_1 = require("./maceteros/maceteros.module");
const global_middleware_middleware_1 = require("./comunes/middleware/global.middleware.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(global_middleware_middleware_1.GlobalMiddlewareMiddleware)
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            usuarios_module_1.UsuariosModule,
            productos_module_1.ProductosModule,
            despachos_module_1.DespachosModule,
            ventas_module_1.VentasModule,
            equipo_module_1.EquipoModule,
            plantas_module_1.PlantasModule,
            fertilizantes_module_1.FertilizantesModule,
            sustratos_module_1.SustratosModule,
            control_plagas_module_1.ControlPlagasModule,
            orden_compras_module_1.OrdenComprasModule,
            detalle_orden_compras_module_1.DetalleOrdenComprasModule,
            maceteros_module_1.MaceterosModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map