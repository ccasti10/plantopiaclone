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
exports.SustratosService = void 0;
const common_1 = require("@nestjs/common");
let SustratosService = class SustratosService {
    constructor() {
        this.masVendidos = [];
        this.catalogo = [];
        this.addSustratos = [];
    }
    create(createSustratoDto) {
        return 'This action adds a new sustrato';
    }
    listaMasVendidas() {
        return this.masVendidos;
    }
    findAll() {
        return this.catalogo;
    }
    findOne(id) {
        return `This action returns a #${id} sustrato`;
    }
    update(id, updateSustratoDto) {
        return `This action updates a #${id} sustrato`;
    }
    remove(id) {
        return `This action removes a #${id} sustrato`;
    }
};
exports.SustratosService = SustratosService;
exports.SustratosService = SustratosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SustratosService);
//# sourceMappingURL=sustratos.service.js.map