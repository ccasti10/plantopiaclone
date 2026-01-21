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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_macetero_dto_1 = require("../../maceteros/dto/create-macetero.dto");
const codigo_producto_pipe_1 = require("../../comunes/pipes/codigo-producto.pipe");
const productos_service_1 = require("../service/productos.service");
const enum_productos_1 = require("../entities/enum-productos");
const create_planta_dto_1 = require("../../plantas/dto/create-planta.dto");
const create_control_plagas_dto_1 = require("../../control-plagas/dto/create-control-plagas.dto");
const create_fertilizante_dto_1 = require("../../fertilizantes/dto/create-fertilizante.dto");
const create_sustrato_dto_1 = require("../../sustratos/dto/create-sustrato.dto");
let ProductosController = class ProductosController {
    constructor(productosService) {
        this.productosService = productosService;
    }
    bestSellers(res) {
        try {
            const resultado = this.productosService.bestSellers();
            res.status(200).send(resultado);
        }
        catch (error) {
            res.status(error.statusCode).send({ message: error.message });
        }
    }
    crearPlanta(CreatePlantaDto, res) {
        try {
            const resultado = this.productosService.createPlanta(CreatePlantaDto);
            res.status(200).send(resultado);
        }
        catch (error) {
            res.status(error.statusCode).send({
                message: error.message,
            });
        }
    }
    crearFertilizante(CreateFertilizanteDto, res) {
        try {
            const resultado = this.productosService.createFertilizante(CreateFertilizanteDto);
            res.status(200).send(resultado);
        }
        catch (error) {
            res.status(error.statusCode).send({
                message: error.message,
            });
        }
    }
    crearSustrato(createSustratoDto, res) {
        try {
            const resultado = this.productosService.createSustrato(createSustratoDto);
            res.status(200).send(resultado);
        }
        catch (error) {
            res.status(error.statusCode).send({
                message: error.message,
            });
        }
    }
    crearControlPlaga(CreateControlPlagasDto, res) {
        try {
            const resultado = this.productosService.createControlPlagas(CreateControlPlagasDto);
            res.status(200).send(resultado);
        }
        catch (error) {
            res.status(error.statusCode).send({
                message: error.message,
            });
        }
    }
    crearMacetero(CreateMaceteroDto, res) {
        try {
            const resultado = this.productosService.createMacetero(CreateMaceteroDto);
            res.status(200).send(resultado);
        }
        catch (error) {
            res.status(error.statusCode).send({
                message: error.message,
            });
        }
    }
    findAll(res) {
        const resultado = this.productosService.findAll();
        res.status(200).send(resultado);
    }
    findbyType(tipo, res) {
        const resultado = this.productosService.findbyType(tipo);
        if (resultado) {
            res.status(200).send(resultado);
        }
        else {
            res.status(400).send('no existen productos del filtro seleccionado');
        }
    }
    findOne(codigoProducto, res) {
        try {
            const resultado = this.productosService.findOne(codigoProducto);
            res.status(200).send(resultado);
        }
        catch (error) {
            res.status(error.statusCode).send({ message: error.message });
        }
    }
};
exports.ProductosController = ProductosController;
__decorate([
    (0, common_1.Get)('masvendidos'),
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H001 y H002',
        description: 'Como ussuario del sistema quiero ver los productos mas vendidos ',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Listado de todos los productos mas vendidos',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'No hay mas vendidos',
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "bestSellers", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H003',
        description: 'Permite crear planta para incorporar en catalogo de productos',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Producto tipo planta creado en catalogo de productos',
    }),
    (0, common_1.Post)('planta'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva Planta' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Planta creada.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos.' }),
    (0, swagger_1.ApiBody)({ type: create_planta_dto_1.CreatePlantaDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_planta_dto_1.CreatePlantaDto, Object]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "crearPlanta", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H003',
        description: 'Permite crear fertilizante para incorporar en catalogo de productos',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Producto tipo fertilizante creado en catalogo de productos',
    }),
    (0, common_1.Post)('fertilizante'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo Fertilizante' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Fertilizante creado.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos.' }),
    (0, swagger_1.ApiBody)({ type: create_fertilizante_dto_1.CreateFertilizanteDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fertilizante_dto_1.CreateFertilizanteDto, Object]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "crearFertilizante", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H003',
        description: 'Permite crear sustrato para incorporar en catalogo de productos',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Producto tipo sustrato creado en catalogo de productos',
    }),
    (0, common_1.Post)('sustrato'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una tipo de producto sustrato ' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'sustrato creado.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos.' }),
    (0, swagger_1.ApiBody)({ type: create_sustrato_dto_1.CreateSustratoDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sustrato_dto_1.CreateSustratoDto, Object]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "crearSustrato", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H003',
        description: 'Permite crear control de plagas para incorporar en catalogo de productos',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Producto control de plagas creado en catalogo de productos',
    }),
    (0, common_1.Post)('control-plagas'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva Planta' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Planta creada.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos.' }),
    (0, swagger_1.ApiBody)({ type: create_control_plagas_dto_1.CreateControlPlagasDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_control_plagas_dto_1.CreateControlPlagasDto, Object]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "crearControlPlaga", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H003',
        description: 'Permite crear macetero para incorporar en catalogo de productos',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Producto tipo Macetero creado en catalogo de productos',
    }),
    (0, common_1.Post)('macetero'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo macetero' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Macetero creado.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos.' }),
    (0, swagger_1.ApiBody)({ type: create_macetero_dto_1.CreateMaceteroDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_macetero_dto_1.CreateMaceteroDto, Object]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "crearMacetero", null);
__decorate([
    (0, common_1.Get)('catalogo'),
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H004',
        description: 'Como cliente quiero poder ver el catalogo de productos',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Listado de todos los productos',
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('catalogo/categoria'),
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H004',
        description: 'Como cliente quiero poder ver el catalogo de productos filtrados por categoria para poder encontrar los productos que quiero',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Listado de Productos Filtrados por Tipo Producto',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'tipo',
        enum: enum_productos_1.TipoProductos,
        required: false,
        schema: { type: 'string' },
    }),
    __param(0, (0, common_1.Query)('tipo', new common_1.ParseEnumPipe(enum_productos_1.TipoProductos))),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "findbyType", null);
__decorate([
    (0, common_1.Get)('detalle/:codigoProducto'),
    (0, swagger_1.ApiOperation)({
        summary: 'Historia Usuario : H007',
        description: 'Como cliente quiero poder buscar producto y ver detalle de el para ver si cumple lo que necesito',
    }),
    (0, swagger_1.ApiProperty)({ name: 'codigoProducto', type: 'string', example: 'MA1' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Producto obtenido con éxito.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto no encontrado.' }),
    (0, swagger_1.ApiParam)({
        name: 'codigoProducto',
        description: 'codigoProducto a obtener detalle',
        required: true,
        schema: { type: 'string' },
    }),
    __param(0, (0, common_1.Param)('codigoProducto', codigo_producto_pipe_1.CodigoProductoPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "findOne", null);
exports.ProductosController = ProductosController = __decorate([
    (0, swagger_1.ApiTags)('productos'),
    (0, common_1.Controller)('productos'),
    __metadata("design:paramtypes", [productos_service_1.ProductosService])
], ProductosController);
//# sourceMappingURL=productos.controller.js.map