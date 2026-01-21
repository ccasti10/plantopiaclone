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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenComprasController = void 0;
const common_1 = require("@nestjs/common");
const create_orden_compra_dto_1 = require("../dto/create-orden-compra.dto");
const swagger_1 = require("@nestjs/swagger");
const orden_compras_service_1 = require("../service/orden-compras.service");
const valida_orden_pipe_pipe_1 = require("../../comunes/pipes/valida-orden.pipe.pipe");
let OrdenComprasController = class OrdenComprasController {
    constructor(ordenComprasService) {
        this.ordenComprasService = ordenComprasService;
    }
    create(CreateOrdenCompraDto, res) {
        try {
            const resultado = this.ordenComprasService.create(CreateOrdenCompraDto);
            res.status(200).send(resultado);
        }
        catch (error) {
            res.status(error.statusCode).send({ message: error.message });
        }
    }
    findAll() {
        return this.ordenComprasService.findAll();
    }
};
exports.OrdenComprasController = OrdenComprasController;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H0005',
        description: 'Permite crear orden de compra con productos seleccionado',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Orden de Compra Creada desde carrito compras',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Orden Creada y devuelve id Orden' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Orden no Creada' }),
    (0, swagger_1.ApiBody)({ type: create_orden_compra_dto_1.CreateOrdenCompraDto }),
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(valida_orden_pipe_pipe_1.ValidaOrdenPipePipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_orden_compra_dto_1.CreateOrdenCompraDto, Object]),
    __metadata("design:returntype", void 0)
], OrdenComprasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrdenComprasController.prototype, "findAll", null);
exports.OrdenComprasController = OrdenComprasController = __decorate([
    (0, swagger_1.ApiTags)('Orden de Compra'),
    (0, common_1.Controller)('ordencompra'),
    __metadata("design:paramtypes", [orden_compras_service_1.OrdenComprasService])
], OrdenComprasController);
//# sourceMappingURL=orden-compras.controller.js.map