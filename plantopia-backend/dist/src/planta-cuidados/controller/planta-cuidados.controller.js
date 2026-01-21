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
exports.PlantaCuidadosController = void 0;
const common_1 = require("@nestjs/common");
const planta_cuidados_service_1 = require("../service/planta-cuidados.service");
const create_planta_cuidado_dto_1 = require("../dto/create-planta-cuidado.dto");
const update_planta_cuidado_dto_1 = require("../dto/update-planta-cuidado.dto");
let PlantaCuidadosController = class PlantaCuidadosController {
    constructor(plantaCuidadosService) {
        this.plantaCuidadosService = plantaCuidadosService;
    }
    create(createPlantaCuidadoDto) {
        return this.plantaCuidadosService.create(createPlantaCuidadoDto);
    }
    findAll() {
        return this.plantaCuidadosService.findAll();
    }
    findOne(id) {
        return this.plantaCuidadosService.findOne(+id);
    }
    update(id, updatePlantaCuidadoDto) {
        return this.plantaCuidadosService.update(+id, updatePlantaCuidadoDto);
    }
    remove(id) {
        return this.plantaCuidadosService.remove(+id);
    }
};
exports.PlantaCuidadosController = PlantaCuidadosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_planta_cuidado_dto_1.CreatePlantaCuidadoDto]),
    __metadata("design:returntype", void 0)
], PlantaCuidadosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlantaCuidadosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlantaCuidadosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_planta_cuidado_dto_1.UpdatePlantaCuidadoDto]),
    __metadata("design:returntype", void 0)
], PlantaCuidadosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlantaCuidadosController.prototype, "remove", null);
exports.PlantaCuidadosController = PlantaCuidadosController = __decorate([
    (0, common_1.Controller)('planta-cuidados'),
    __metadata("design:paramtypes", [planta_cuidados_service_1.PlantaCuidadosService])
], PlantaCuidadosController);
//# sourceMappingURL=planta-cuidados.controller.js.map