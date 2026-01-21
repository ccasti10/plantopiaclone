"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantaCuidadosService = void 0;
const common_1 = require("@nestjs/common");
let PlantaCuidadosService = class PlantaCuidadosService {
    create(createPlantaCuidadoDto) {
        return 'This action adds a new plantaCuidado';
    }
    findAll() {
        return `This action returns all plantaCuidados`;
    }
    findOne(id) {
        return `This action returns a #${id} plantaCuidado`;
    }
    update(id, updatePlantaCuidadoDto) {
        return `This action updates a #${id} plantaCuidado`;
    }
    remove(id) {
        return `This action removes a #${id} plantaCuidado`;
    }
};
exports.PlantaCuidadosService = PlantaCuidadosService;
exports.PlantaCuidadosService = PlantaCuidadosService = __decorate([
    (0, common_1.Injectable)()
], PlantaCuidadosService);
//# sourceMappingURL=planta-cuidados.service.js.map