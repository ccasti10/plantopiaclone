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
exports.PlantasController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const plantas_service_1 = require("../service/plantas.service");
let PlantasController = class PlantasController {
    constructor(plantasService) {
        this.plantasService = plantasService;
    }
};
exports.PlantasController = PlantasController;
exports.PlantasController = PlantasController = __decorate([
    (0, swagger_1.ApiTags)('plantas'),
    (0, common_1.Controller)('plantas'),
    __metadata("design:paramtypes", [plantas_service_1.PlantasService])
], PlantasController);
//# sourceMappingURL=plantas.controller.js.map