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
exports.DespachosController = void 0;
const common_1 = require("@nestjs/common");
const despachos_service_1 = require("./despachos.service");
const swagger_1 = require("@nestjs/swagger");
let DespachosController = class DespachosController {
    constructor(despachosService) {
        this.despachosService = despachosService;
    }
    findOne(id, res) {
        const idBusqueda = 1;
        const resultado = this.despachosService.findOne(idBusqueda);
        res.status(200).send(resultado);
    }
};
exports.DespachosController = DespachosController;
__decorate([
    (0, common_1.Get)(':id/seguimiento'),
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H0006',
        description: 'Como cliente quiero hacer seguimiento a mi compra',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Retorna Despacho',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DespachosController.prototype, "findOne", null);
exports.DespachosController = DespachosController = __decorate([
    (0, swagger_1.ApiTags)('Despachos'),
    (0, common_1.Controller)('despachos'),
    __metadata("design:paramtypes", [despachos_service_1.DespachosService])
], DespachosController);
//# sourceMappingURL=despachos.controller.js.map