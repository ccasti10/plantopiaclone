"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodigoProductoPipe = void 0;
const common_1 = require("@nestjs/common");
const error_plantopia_1 = require("../../error-plantopia/error-plantopia");
let CodigoProductoPipe = class CodigoProductoPipe {
    transform(value) {
        const letrasNumeros = /^[a-zA-Z0-9]+$/;
        if (!letrasNumeros.test(value)) {
            throw new error_plantopia_1.ErrorPlantopia('valores no validos', 404);
        }
        return value;
    }
};
exports.CodigoProductoPipe = CodigoProductoPipe;
exports.CodigoProductoPipe = CodigoProductoPipe = __decorate([
    (0, common_1.Injectable)()
], CodigoProductoPipe);
//# sourceMappingURL=codigo-producto.pipe.js.map