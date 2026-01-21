"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidaOrdenPipePipe = void 0;
const common_1 = require("@nestjs/common");
let ValidaOrdenPipePipe = class ValidaOrdenPipePipe {
    transform(value) {
        if (!value.emailComprador || value.emailComprador == undefined ||
            !value.idCliente || value.idCliente == undefined) {
            throw new common_1.BadRequestException('Cada orden debe tener atributos emailComprador e idCliente.');
        }
        if (!Array.isArray(value.detalle)) {
            throw new common_1.BadRequestException('El campo detalle debe ser un array.');
        }
        value.detalle.forEach(detalle => {
            if (!detalle.idProducto || detalle.cantidad === undefined || detalle.precio === undefined || detalle.descuento === undefined) {
                throw new common_1.BadRequestException('Cada detalle debe tener idProducto, cantidad, precio y descuento.');
            }
        });
        return value;
    }
};
exports.ValidaOrdenPipePipe = ValidaOrdenPipePipe;
exports.ValidaOrdenPipePipe = ValidaOrdenPipePipe = __decorate([
    (0, common_1.Injectable)()
], ValidaOrdenPipePipe);
//# sourceMappingURL=valida-orden.pipe.pipe.js.map