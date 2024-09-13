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
exports.CreateUsuarioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateUsuarioDto {
}
exports.CreateUsuarioDto = CreateUsuarioDto;
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'rut', example: '12345678-9' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "rut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'nombre', example: 'Juan Perez' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'email', example: 'mail@emaildeprueba.cl' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'password', example: 'password' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'telefono', example: '+56912345678' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'direccion', example: 'Calle Falsa 123' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'ciudad', example: 'Santiago' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "ciudad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'region', example: 'Metropolitana' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'comuna', example: 'Santiago' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "comuna", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'codigoPostal', example: '1234567' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "codigoPostal", void 0);
//# sourceMappingURL=create-usuario.dto.js.map