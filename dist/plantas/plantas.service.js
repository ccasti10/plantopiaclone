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
exports.PlantasService = void 0;
const common_1 = require("@nestjs/common");
let PlantasService = class PlantasService {
    constructor() {
        this.masVendidos = [];
        this.catalogo = [];
    }
    create(createPlantaDto) {
        return 'This action adds a new planta';
    }
    listaPlantasMasVendidas() {
        return this.masVendidos;
    }
    findAll() {
        return this.catalogo;
    }
    findOne(id) {
        return `This action returns a #${id} planta`;
    }
    update(id, updatePlantaDto) {
        return `This action updates a #${id} planta`;
    }
    remove(id) {
        return `This action removes a #${id} planta`;
    }
};
exports.PlantasService = PlantasService;
exports.PlantasService = PlantasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PlantasService);
//# sourceMappingURL=plantas.service.js.map