"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlPlagasModule = void 0;
const common_1 = require("@nestjs/common");
const control_plagas_service_1 = require("./control-plagas.service");
const control_plagas_controller_1 = require("./control-plagas.controller");
let ControlPlagasModule = class ControlPlagasModule {
};
exports.ControlPlagasModule = ControlPlagasModule;
exports.ControlPlagasModule = ControlPlagasModule = __decorate([
    (0, common_1.Module)({
        controllers: [control_plagas_controller_1.ControlPlagasController],
        providers: [control_plagas_service_1.ControlPlagasService],
    })
], ControlPlagasModule);
//# sourceMappingURL=control-plagas.module.js.map