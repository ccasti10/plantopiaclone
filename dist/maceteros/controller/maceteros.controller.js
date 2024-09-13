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
exports.MaceterosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const maceteros_service_1 = require("../service/maceteros.service");
const update_macetero_dto_1 = require("../dto/update-macetero.dto");
let MaceterosController = class MaceterosController {
    constructor(maceterosService) {
        this.maceterosService = maceterosService;
    }
    findAll() {
        return this.maceterosService.findAll();
    }
    findOne(id) {
        return this.maceterosService.findOne(+id);
    }
    update(id, updateMaceteroDto) {
        return this.maceterosService.update(+id, updateMaceteroDto);
    }
    remove(id) {
        return this.maceterosService.remove(+id);
    }
};
exports.MaceterosController = MaceterosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MaceterosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MaceterosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_macetero_dto_1.UpdateMaceteroDto]),
    __metadata("design:returntype", void 0)
], MaceterosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MaceterosController.prototype, "remove", null);
exports.MaceterosController = MaceterosController = __decorate([
    (0, swagger_1.ApiTags)('maceteros'),
    (0, common_1.Controller)('maceteros'),
    __metadata("design:paramtypes", [maceteros_service_1.MaceterosService])
], MaceterosController);
//# sourceMappingURL=maceteros.controller.js.map