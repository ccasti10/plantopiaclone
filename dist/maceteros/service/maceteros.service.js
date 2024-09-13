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
exports.MaceterosService = void 0;
const common_1 = require("@nestjs/common");
const macetero_entity_1 = require("../entities/macetero.entity");
const enum_productos_1 = require("../../productos/entities/enum-productos");
const enum_macetero_1 = require("../entities/enum-macetero");
let MaceterosService = class MaceterosService {
    constructor() {
        this.maceteros = [];
        this.maceteros = [new macetero_entity_1.Macetero(1, 'macetero rojo', ['http://lugar.com/imagen_m1.png'], 0, 1500, ['Arica a Pta.Arenas'], 10, 'macetero de alta gama', enum_productos_1.TipoProductos.Macetero, 0, 0, 'MA1', 15, 16, 0.17, 1.5, 'Plastico', 'rojo', enum_macetero_1.FormaMacetero.Rectangular),
            new macetero_entity_1.Macetero(2, 'macetero blanco', ['http://lugar.com/imagen_m2.png'], 0, 2500, ['Arica a Pta.Arenas'], 10, 'macetero interior', enum_productos_1.TipoProductos.Macetero, 0, 500, 'MA2', 15, 16, 0.17, 1.5, 'Plastico', 'blanca', enum_macetero_1.FormaMacetero.Circular),
            new macetero_entity_1.Macetero(3, 'macetero verde', ['http://lugar.com/imagen_m1.png'], 0, 1500, ['Arica a Pta.Arenas'], 10, 'macetero de alta gama', enum_productos_1.TipoProductos.Macetero, 0, 500, 'MA3', 15, 16, 0.17, 1.5, 'madeta', 'verde', enum_macetero_1.FormaMacetero.Rectangular),
            new macetero_entity_1.Macetero(4, 'macetero azul', ['http://lugar.com/imagen_m2.png'], 0, 2500, ['Arica a Pta.Arenas'], 10, 'macetero interior', enum_productos_1.TipoProductos.Macetero, 0, 0, 'MA4', 15, 16, 0.17, 1.5, 'Plastico', 'azul', enum_macetero_1.FormaMacetero.Circular),
            new macetero_entity_1.Macetero(5, 'macetero amarillo', ['http://lugar.com/imagen_m1.png'], 0, 1500, ['Arica a Pta.Arenas'], 10, 'macetero de alta gama', enum_productos_1.TipoProductos.Macetero, 0, 500, 'MA5', 15, 16, 0.17, 1.5, 'madera', 'amarillo', enum_macetero_1.FormaMacetero.Rectangular),
            new macetero_entity_1.Macetero(6, 'macetero celeste', ['http://lugar.com/imagen_m2.png'], 0, 2500, ['Arica a Pta.Arenas'], 10, 'macetero interior', enum_productos_1.TipoProductos.Macetero, 0, 250, 'MA6', 15, 16, 0.17, 1.5, 'Plastico', 'celeste', enum_macetero_1.FormaMacetero.Circular),
            new macetero_entity_1.Macetero(7, 'macetero rosa', ['http://lugar.com/imagen_m1.png'], 0, 1500, ['Arica a Pta.Arenas'], 10, 'macetero de alta gama', enum_productos_1.TipoProductos.Macetero, 0, 320, 'MA7', 15, 16, 0.17, 1.5, 'Plastico', 'rosa', enum_macetero_1.FormaMacetero.Rectangular),
            new macetero_entity_1.Macetero(8, 'macetero plomo', ['http://lugar.com/imagen_m2.png'], 0, 2500, ['Arica a Pta.Arenas'], 10, 'macetero interior', enum_productos_1.TipoProductos.Macetero, 0, 0, 'MA8', 15, 16, 0.17, 1.5, 'cemento', 'plomo', enum_macetero_1.FormaMacetero.Circular)
        ];
    }
    obtCantidadMaceteros() {
        const cantidadMaceteros = this.maceteros.length;
        return cantidadMaceteros;
    }
    createCodigoMacetero() {
        const numeroCodigo = this.obtCantidadMaceteros() + 1;
        const codigoMacetero = 'MA' + numeroCodigo;
        return codigoMacetero;
    }
    create(createMaceteroDto, idProducto, codigoProducto) {
        const creMacetero = new macetero_entity_1.Macetero(idProducto, createMaceteroDto.nombreProducto, createMaceteroDto.imagenProducto, createMaceteroDto.descuento, createMaceteroDto.precioNormal, createMaceteroDto.coberturaDeDespacho, createMaceteroDto.stock, createMaceteroDto.descripcionProducto, enum_productos_1.TipoProductos.Macetero, 0, 0, codigoProducto, createMaceteroDto.alto, createMaceteroDto.ancho, createMaceteroDto.peso, createMaceteroDto.capacidad, createMaceteroDto.material, createMaceteroDto.color, createMaceteroDto.forma);
        this.maceteros.push(creMacetero);
        return creMacetero;
    }
    findAll() {
        return this.maceteros;
    }
    findOne(id) {
        const maceteroEncontrado = this.maceteros.find(prod => prod.idProducto === id);
        console.log(maceteroEncontrado);
        if (maceteroEncontrado) {
            return maceteroEncontrado;
        }
        return null;
    }
    update(id, updateMaceteroDto) {
        return `This action updates a #${id} macetero`;
    }
    remove(id) {
        return `This action removes a #${id} macetero`;
    }
};
exports.MaceterosService = MaceterosService;
exports.MaceterosService = MaceterosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MaceterosService);
//# sourceMappingURL=maceteros.service.js.map