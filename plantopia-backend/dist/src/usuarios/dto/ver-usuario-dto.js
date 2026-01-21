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
exports.VerUsuarioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const planta_entity_1 = require("../../plantas/entities/planta.entity");
class VerUsuarioDto {
    constructor(nombre, email, plantas) {
        this.nombre = nombre;
        this.email = email;
        this.plantas = plantas;
    }
}
exports.VerUsuarioDto = VerUsuarioDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Juan Perez' }),
    __metadata("design:type", String)
], VerUsuarioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'juan.perez@mail.com' }),
    __metadata("design:type", String)
], VerUsuarioDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [planta_entity_1.Planta], example: [] }),
    __metadata("design:type", Array)
], VerUsuarioDto.prototype, "plantas", void 0);
//# sourceMappingURL=ver-usuario-dto.js.map