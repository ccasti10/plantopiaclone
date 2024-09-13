"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaceterosModule = void 0;
const common_1 = require("@nestjs/common");
const maceteros_service_1 = require("./service/maceteros.service");
const maceteros_controller_1 = require("./controller/maceteros.controller");
let MaceterosModule = class MaceterosModule {
};
exports.MaceterosModule = MaceterosModule;
exports.MaceterosModule = MaceterosModule = __decorate([
    (0, common_1.Module)({
        controllers: [maceteros_controller_1.MaceterosController],
        providers: [maceteros_service_1.MaceterosService],
        exports: [maceteros_service_1.MaceterosService]
    })
], MaceterosModule);
//# sourceMappingURL=maceteros.module.js.map