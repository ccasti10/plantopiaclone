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
const class_validator_1 = require("class-validator");
class CreateUsuarioDto {
}
exports.CreateUsuarioDto = CreateUsuarioDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'rut',
        description: 'Rut Usuario con digito y guion ',
        example: '12345678-k',
        required: true,
        type: 'string',
        minLength: 3,
        maxLength: 10,
        nullable: false
    }),
    (0, class_validator_1.IsString)({ message: 'El rut debe contener guion y digito' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El rut es campo obligatorio' }),
    (0, class_validator_1.MinLength)(3, { message: 'El largo del rut debe ser mayor igual a 3 caracteres' }),
    (0, class_validator_1.MaxLength)(10, { message: 'El largo del rut debe ser menor igual a 10 caracteres' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "rut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'nombre',
        description: 'Nombre completo Usuario',
        example: 'Juan Andres Perez Cotapo',
        required: true,
        type: 'string',
        minLength: 10,
        maxLength: 100,
        nullable: false
    }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe contener solo texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es campo obligatorio' }),
    (0, class_validator_1.MinLength)(10, { message: 'El largo del nombre debe ser mayor igual a 10 caracteres' }),
    (0, class_validator_1.MaxLength)(100, { message: 'El largo del nombre debe ser menor igual a 100 caracteres' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'email',
        example: 'mail@emaildeprueba.cl',
        description: 'El correo electrónico del usuario. Debe estar en formato válido de email.',
        minLength: 10,
        maxLength: 200,
        type: String,
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'El email debe tener un formato válido.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El email es campo obligatorio' }),
    (0, class_validator_1.MinLength)(10, { message: 'El largo del email debe ser mayor igual a 10 caracteres' }),
    (0, class_validator_1.MaxLength)(200, { message: 'El largo del email debe ser menor igual a 100 caracteres' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'password',
        example: 'ABCD1234',
        description: 'Clave Usuario',
        minLength: 8,
        maxLength: 10,
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El password es campo obligatorio' }),
    (0, class_validator_1.MinLength)(8, { message: 'El largo del password debe ser mayor igual a 8 caracteres' }),
    (0, class_validator_1.MaxLength)(10, { message: 'El largo del password debe ser menor igual a 10 caracteres' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'telefono',
        type: Number,
        description: 'telefono contacto',
        example: 959995226,
        required: true,
        minimum: 100000,
        maximum: 5699999999,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'El telefono debe ser un número' }),
    (0, class_validator_1.Min)(100000, { message: 'El telefono  debe ser al mayor igual a 100000' }),
    (0, class_validator_1.Max)(5699999999, { message: 'El telefono debe ser menor igual a 5699999999' }),
    __metadata("design:type", Number)
], CreateUsuarioDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'direccion',
        example: 'moilina 455',
        description: 'direccion Usuario',
        minLength: 5,
        maxLength: 300,
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La direccion es campo obligatorio' }),
    (0, class_validator_1.MinLength)(5, { message: 'El largo de la direccion debe ser mayor igual a 5 caracteres' }),
    (0, class_validator_1.MaxLength)(300, { message: 'El largo de la direccion debe ser menor igual a 300 caracteres' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'ciudad',
        example: 'Santiago',
        description: 'direccion Usuario',
        minLength: 4,
        maxLength: 100,
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La ciudad es campo obligatorio' }),
    (0, class_validator_1.MinLength)(4, { message: 'El largo de la ciudad debe ser mayor igual a 4 caracteres' }),
    (0, class_validator_1.MaxLength)(100, { message: 'El largo de la ciudad debe ser menor igual a 100 caracteres' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "ciudad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'region',
        example: 'Metropolitana',
        description: 'region de la direccion del Usuario',
        minLength: 5,
        maxLength: 100,
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La region es campo obligatorio' }),
    (0, class_validator_1.MinLength)(5, { message: 'El largo de la region debe ser mayor igual a 5 caracteres' }),
    (0, class_validator_1.MaxLength)(100, { message: 'El largo de la region debe ser menor igual a 100 caracteres' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'comuna',
        example: 'Santiago',
        description: 'comuna de la direccion del Usuario',
        minLength: 5,
        maxLength: 100,
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La comuna es campo obligatorio' }),
    (0, class_validator_1.MinLength)(5, { message: 'El largo de la comuna debe ser mayor igual a 5 caracteres' }),
    (0, class_validator_1.MaxLength)(100, { message: 'El largo de la comuna debe ser menor igual a 100 caracteres' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "comuna", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'codigoPostal',
        type: Number,
        description: 'codigo postal ',
        example: 21000001,
        required: true,
        minimum: 100000,
        maximum: 999999999,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'El codigo postal debe ser un número' }),
    (0, class_validator_1.Min)(100000, { message: 'El codigo postal  debe ser al mayor igual a 100000' }),
    (0, class_validator_1.Max)(999999999, { message: 'El codigo postal debe ser menor igual a 999999999' }),
    __metadata("design:type", Number)
], CreateUsuarioDto.prototype, "codigoPostal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de Codigo de Plantas adquiridas por el usaurio',
        type: [String],
        example: ['Pl01, PL02'],
        default: [],
    }),
    (0, class_validator_1.IsArray)({ message: 'Plantas debe un array' }),
    (0, class_validator_1.IsString)({ each: true, message: 'Cada codigo de plante debe ser una cadena de texto.' }),
    __metadata("design:type", Array)
], CreateUsuarioDto.prototype, "plantas", void 0);
//# sourceMappingURL=create-usuario.dto.js.map