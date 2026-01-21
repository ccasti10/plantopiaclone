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
exports.CreateControlPlagasDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_producto_dto_1 = require("../../productos/dto/create-producto.dto");
const enum_control_plagas_1 = require("../entities/enum-control-plagas");
const class_validator_1 = require("class-validator");
const enum_productos_1 = require("../../productos/entities/enum-productos");
class CreateControlPlagasDto extends create_producto_dto_1.CreateProductoDto {
}
exports.CreateControlPlagasDto = CreateControlPlagasDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'categoria',
        description: 'Enum Tipo Producto',
        enum: enum_productos_1.TipoProductos, example: enum_productos_1.TipoProductos.ControlPlagas
    }),
    (0, class_validator_1.IsEnum)(enum_productos_1.TipoProductos, { message: 'El valor debe ser una tipo de producto válido' }),
    __metadata("design:type", String)
], CreateControlPlagasDto.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de Plagas controladas',
        enum: enum_control_plagas_1.TipoPlaga,
        example: [enum_control_plagas_1.TipoPlaga.ACAROS, enum_control_plagas_1.TipoPlaga.COCHINILLAS, enum_control_plagas_1.TipoPlaga.COCHINILLAS],
    }),
    (0, class_validator_1.IsArray)({ message: 'El valor debe ser un array de Plagas' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'La lista plagas controladas no puede estar vacía' }),
    (0, class_validator_1.IsEnum)(enum_control_plagas_1.TipoPlaga, { each: true, message: 'El valor debe ser un tipo de plagan válido' }),
    __metadata("design:type", Array)
], CreateControlPlagasDto.prototype, "TipoPlagaControlada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'composicion',
        description: 'Composicion del plaguisida',
        example: 'Aceite de neem(azadiractina)',
        required: true,
        type: 'string',
        minLength: 5,
        maxLength: 100,
        nullable: false
    }),
    (0, class_validator_1.IsString)({ message: 'Composicion del plaglisida debe ser texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Composicion del plaguisida es campo obligatorio' }),
    (0, class_validator_1.MinLength)(5, { message: 'Largo de Composicion del plaglisida  debe ser mayor igual  de 5 caracteres' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Largo de Composicion del plaglisida  debe ser menor igual  de 100 caracteres' }),
    __metadata("design:type", String)
], CreateControlPlagasDto.prototype, "composicion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Metodos de Aplicacion Producto',
        enum: enum_control_plagas_1.MetodoAplicacion,
        example: [enum_control_plagas_1.MetodoAplicacion.SPRAY_FOLIAR, enum_control_plagas_1.MetodoAplicacion.APLICACION_SUELO],
    }),
    (0, class_validator_1.IsArray)({ message: 'El valor debe ser un array de metodos' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'La lista metodos de aplicacion no puede estar vacía' }),
    (0, class_validator_1.IsEnum)(enum_control_plagas_1.MetodoAplicacion, { each: true, message: 'El valor debe ser un metodo de aplicacion válido' }),
    __metadata("design:type", Array)
], CreateControlPlagasDto.prototype, "metodoAplicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'frecuenciaAplicacion',
        description: 'frecuencia Aplicacion',
        example: 'Cada 7-14 días según la infestación',
        required: true,
        type: 'string',
        minLength: 5,
        maxLength: 100,
        nullable: false
    }),
    (0, class_validator_1.IsString)({ message: 'frecuencia Aplicacion debe ser texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'frecuencia Aplicacion es campo obligatorio' }),
    (0, class_validator_1.MinLength)(5, { message: 'Largo de frecuencia Aplicacion  debe ser mayor igual  de 5 caracteres' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Largo de frecuencia Aplicacion  debe ser menor igual  de 100 caracteres' }),
    __metadata("design:type", String)
], CreateControlPlagasDto.prototype, "frecuenciaAplicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'precauciones',
        description: 'precauciones',
        example: 'Seguridad para mascotas, evitar el contacto directo con ojos y piel',
        required: true,
        type: 'string',
        minLength: 5,
        maxLength: 200,
        nullable: false
    }),
    (0, class_validator_1.IsString)({ message: 'Las precauciones del plaguisida debe ser texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Las precauciones del plaguisida es campo obligatorio' }),
    (0, class_validator_1.MinLength)(5, { message: 'Largo de Las precauciones del plaguisida  debe ser mayor igual  de 5 caracteres' }),
    (0, class_validator_1.MaxLength)(200, { message: 'Largo de Las precauciones del plaguisida  debe ser menor igual  de 200 caracteres' }),
    __metadata("design:type", String)
], CreateControlPlagasDto.prototype, "precauciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Metodos de Aplicacion Producto',
        enum: enum_control_plagas_1.Eficacia, example: enum_control_plagas_1.Eficacia.ALTA
    }),
    (0, class_validator_1.IsEnum)(enum_control_plagas_1.Eficacia, { message: 'El valor debe ser eficacia valida' }),
    __metadata("design:type", String)
], CreateControlPlagasDto.prototype, "eficacia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Toxicidad del producto',
        example: true,
        required: true,
        default: false,
    }),
    (0, class_validator_1.IsBoolean)({ message: 'La toxicidad debe ser un valor booleano' }),
    __metadata("design:type", Boolean)
], CreateControlPlagasDto.prototype, "Toxicidad", void 0);
//# sourceMappingURL=create-control-plagas.dto.js.map