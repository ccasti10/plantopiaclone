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
exports.Usuario = void 0;
const swagger_1 = require("@nestjs/swagger");
const comunas_stgo_enum_1 = require("../entities/comunas.stgo-enum");
const class_validator_1 = require("class-validator");
class Usuario {
}
exports.Usuario = Usuario;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'rut',
        example: '12345678-9',
        description: 'RUT del usuario en formato chileno',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\d{7,8}-[0-9kK]$/, {
        message: 'El formato del RUT no es válido',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Usuario.prototype, "rut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'nombre',
        example: 'Juan Perez',
        description: 'Nombre completo del usuario',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'email',
        example: 'mail@emaildeprueba.cl',
        description: 'Correo electrónico del usuario',
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'password',
        example: 'password',
        description: 'Contraseña del usuario',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 20),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Usuario.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'telefono',
        example: '+56912345678',
        description: 'Número de teléfono del usuario',
    }),
    (0, class_validator_1.IsPhoneNumber)('CL', {
        message: 'El número de teléfono debe ser válido en Chile',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Usuario.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'direccion',
        example: 'Calle Falsa 123',
        description: 'Dirección del usuario',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Usuario.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'ciudad',
        example: 'Santiago',
        description: 'Ciudad de residencia del usuario',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Usuario.prototype, "ciudad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'region',
        example: 'Metropolitana',
        description: 'Región de residencia del usuario',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Usuario.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'comuna',
        example: 'Santiago',
        enum: comunas_stgo_enum_1.ComunaSantiago,
        description: 'Comuna de residencia dentro de Santiago',
    }),
    (0, class_validator_1.IsEnum)(comunas_stgo_enum_1.ComunaSantiago),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Usuario.prototype, "comuna", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'codigoPostal',
        example: '1234567',
        description: 'Código postal de la dirección del usuario',
    }),
    (0, class_validator_1.Matches)(/^\d{7}$/, {
        message: 'El código postal debe contener 7 dígitos',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Usuario.prototype, "codigoPostal", void 0);
//# sourceMappingURL=usuario.entity.js.map