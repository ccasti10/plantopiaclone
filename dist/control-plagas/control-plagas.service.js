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
exports.ControlPlagasService = void 0;
const common_1 = require("@nestjs/common");
let ControlPlagasService = class ControlPlagasService {
    constructor() {
        this.masVendidos = [];
        this.catalogo = [];
    }
    create(createControlPlagasDto) {
        return 'This action adds a new controlPlagas';
    }
    listaMasVendidas() {
        return this.masVendidos;
    }
    findAll() {
        return this.catalogo;
    }
    findOne(id) {
        return `This action returns a #${id} controlPlagas`;
    }
    update(id, updateControlPlagasDto) {
        return `This action updates a #${id} controlPlagas`;
    }
    remove(id) {
        return `This action removes a #${id} controlPlagas`;
    }
};
exports.ControlPlagasService = ControlPlagasService;
exports.ControlPlagasService = ControlPlagasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ControlPlagasService);
//# sourceMappingURL=control-plagas.service.js.map