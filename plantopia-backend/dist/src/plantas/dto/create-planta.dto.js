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
exports.CreatePlantaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_producto_dto_1 = require("../../productos/dto/create-producto.dto");
const enum_plantas_1 = require("../entities/enum-plantas");
const class_validator_1 = require("class-validator");
const enum_productos_1 = require("../../productos/entities/enum-productos");
class CreatePlantaDto extends create_producto_dto_1.CreateProductoDto {
}
exports.CreatePlantaDto = CreatePlantaDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'categoria',
        description: 'Enum Tipo Producto',
        enum: enum_productos_1.TipoProductos, example: enum_productos_1.TipoProductos.Planta
    }),
    __metadata("design:type", String)
], CreatePlantaDto.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'habitat',
        description: 'Enum habitat Planta',
        enum: enum_plantas_1.Habitat,
        example: enum_plantas_1.Habitat.CUALQUIERA,
    }),
    (0, class_validator_1.IsEnum)(enum_plantas_1.Habitat, {
        message: 'El valor debe ser una habitat valido',
    }),
    __metadata("design:type", String)
], CreatePlantaDto.prototype, "habitat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'luz',
        description: 'Enum Cantidad de luz requerida',
        enum: enum_plantas_1.LuzRequerida,
        example: enum_plantas_1.LuzRequerida.ALTA,
    }),
    (0, class_validator_1.IsEnum)(enum_plantas_1.LuzRequerida, {
        message: 'El valor debe ser una cantidad de luz requerida valida ',
    }),
    __metadata("design:type", String)
], CreatePlantaDto.prototype, "luz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'frecuenciaDeRiego',
        description: 'Enum Frecuencia de riego',
        enum: enum_plantas_1.FrecuenciaDeRiego,
        example: enum_plantas_1.FrecuenciaDeRiego.SEMANAL,
    }),
    (0, class_validator_1.IsEnum)(enum_plantas_1.FrecuenciaDeRiego, {
        message: 'El valor debe ser Frecuencia de riego valido',
    }),
    __metadata("design:type", String)
], CreatePlantaDto.prototype, "frecuenciaDeRiego", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'humedadIdeal',
        description: 'Enum Nivel de humedad ideal',
        enum: enum_plantas_1.NivelDeHumedad,
        example: enum_plantas_1.NivelDeHumedad.ALTA,
    }),
    (0, class_validator_1.IsEnum)(enum_plantas_1.NivelDeHumedad, {
        message: 'El valor debe ser Nivel de humedad ideal valida',
    }),
    __metadata("design:type", String)
], CreatePlantaDto.prototype, "humedadIdeal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'temperaturaIdeal',
        type: Number,
        description: 'temperatura ideal del planta en Grados Celcius',
        example: 18,
        required: true,
        minimum: 1,
        maximum: 30,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'La temperatura ideal de planta ser un número' }),
    (0, class_validator_1.Min)(1, { message: 'La temperatura ideal de planta debe ser mayor igual a 1 grado celcius' }),
    (0, class_validator_1.Max)(30, { message: 'La temperatura ideal de planta debe ser menor igual a 30 grados celcius' }),
    __metadata("design:type", Number)
], CreatePlantaDto.prototype, "temperaturaIdeal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Toxicidad para Mascotas',
        example: true,
        required: true,
        default: false,
    }),
    (0, class_validator_1.IsBoolean)({ message: 'La toxicidad debe ser un valor booleano' }),
    __metadata("design:type", Boolean)
], CreatePlantaDto.prototype, "toxicidadMascotas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'tamanoMaximo',
        type: Number,
        description: 'Tamaño Máximo Planta en centimetros',
        example: 80,
        required: true,
        minimum: 1,
        maximum: 200,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'El tamaño maximo de planta ser un número' }),
    (0, class_validator_1.Min)(1, { message: 'El tamaño maximo de planta debe ser mayor igual a 1 centimetro' }),
    (0, class_validator_1.Max)(200, { message: 'El tamaño maximo deplanta debe ser menor igual a 200 centimetros' }),
    __metadata("design:type", Number)
], CreatePlantaDto.prototype, "tamanoMaximo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'tipoSuelo',
        description: 'Enum tipos de suelo ',
        enum: enum_plantas_1.TipoDeSuelo,
        example: enum_plantas_1.TipoDeSuelo.ARENOSO,
    }),
    (0, class_validator_1.IsEnum)(enum_plantas_1.TipoDeSuelo, {
        message: 'El valor debe ser tipo de suelo valido',
    }),
    __metadata("design:type", String)
], CreatePlantaDto.prototype, "tipoSuelo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'dificultadDeCuidado',
        description: 'Enum dificultad de cuidado ',
        enum: enum_plantas_1.DificultadDeCuidado,
        example: enum_plantas_1.DificultadDeCuidado.BAJA,
    }),
    (0, class_validator_1.IsEnum)(enum_plantas_1.DificultadDeCuidado, {
        message: 'El valor debe ser una difocultad de cuidado valida',
    }),
    __metadata("design:type", String)
], CreatePlantaDto.prototype, "dificultadDeCuidado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'estacion',
        description: 'Enum Estación de mayor crecimiento',
        enum: enum_plantas_1.Estacion,
        example: enum_plantas_1.Estacion.PRIMAVERA,
    }),
    (0, class_validator_1.IsEnum)(enum_plantas_1.Estacion, {
        message: 'El valor debe ser una Estación de mayor crecimiento valida',
    }),
    __metadata("design:type", String)
], CreatePlantaDto.prototype, "estacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de ID Producto de Fertilizantes sugeridos',
        type: [Number],
        example: [1, 2, 3],
        default: [],
    }),
    (0, class_validator_1.IsArray)({ message: 'Fertilizantes sugeridos debe ser un array' }),
    (0, class_validator_1.IsNumber)({}, { each: true, message: 'Cada fertilizante sugerido debe ser un número' }),
    __metadata("design:type", Array)
], CreatePlantaDto.prototype, "fertilizantesSugeridos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de ID Producto de Sustratos sugeridos',
        type: [Number],
        example: [1, 2, 3],
        default: [],
    }),
    (0, class_validator_1.IsArray)({ message: 'Sustrato sugeridos debe ser un array' }),
    (0, class_validator_1.IsNumber)({}, { each: true, message: 'Cada sustrato sugerido debe ser un número' }),
    __metadata("design:type", Array)
], CreatePlantaDto.prototype, "sustratosSugeridos", void 0);
//# sourceMappingURL=create-planta.dto.js.map