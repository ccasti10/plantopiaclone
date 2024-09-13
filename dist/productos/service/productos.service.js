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
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
const error_plantopia_1 = require("../../error-plantopia/error-plantopia");
const producto_entity_1 = require("../entities/producto.entity");
const enum_productos_1 = require("../entities/enum-productos");
const maceteros_service_1 = require("../../maceteros/service/maceteros.service");
let ProductosService = class ProductosService {
    constructor(servicioMaceteros) {
        this.servicioMaceteros = servicioMaceteros;
        this.productos = [];
        this.productos = [new producto_entity_1.Producto(1, 'macetero rojo', ['http://lugar.com/imagen_m1.png'], 0, 1500, ['Arica a Pta.Arenas'], 10, 'macetero de alta gama', enum_productos_1.TipoProductos.Macetero, 0, 0, 'MA1'),
            new producto_entity_1.Producto(2, 'macetero blanco', ['http://lugar.com/imagen_m2.png'], 0, 2500, ['Arica a Pta.Arenas'], 10, 'macetero interior', enum_productos_1.TipoProductos.Macetero, 0, 500, 'MA2'),
            new producto_entity_1.Producto(3, 'macetero verde', ['http://lugar.com/imagen_m1.png'], 0, 1500, ['Arica a Pta.Arenas'], 10, 'macetero de alta gama', enum_productos_1.TipoProductos.Macetero, 0, 500, 'MA3'),
            new producto_entity_1.Producto(4, 'macetero azul', ['http://lugar.com/imagen_m2.png'], 0, 2500, ['Arica a Pta.Arenas'], 10, 'macetero interior', enum_productos_1.TipoProductos.Macetero, 0, 0, 'MA4'),
            new producto_entity_1.Producto(5, 'macetero amarillo', ['http://lugar.com/imagen_m1.png'], 0, 1500, ['Arica a Pta.Arenas'], 10, 'macetero de alta gama', enum_productos_1.TipoProductos.Macetero, 0, 500, 'MA5'),
            new producto_entity_1.Producto(6, 'macetero celeste', ['http://lugar.com/imagen_m2.png'], 0, 2500, ['Arica a Pta.Arenas'], 10, 'macetero interior', enum_productos_1.TipoProductos.Macetero, 0, 250, 'MA6'),
            new producto_entity_1.Producto(7, 'macetero rosa', ['http://lugar.com/imagen_m1.png'], 0, 1500, ['Arica a Pta.Arenas'], 10, 'macetero de alta gama', enum_productos_1.TipoProductos.Macetero, 0, 320, 'MA7'),
            new producto_entity_1.Producto(8, 'macetero plomo', ['http://lugar.com/imagen_m2.png'], 0, 2500, ['Arica a Pta.Arenas'], 10, 'macetero interior', enum_productos_1.TipoProductos.Macetero, 0, 0, 'MA8')
        ];
    }
    findAll() {
        return this.productos;
    }
    findbyType(categoria) {
        if (categoria) {
            const produtos = this.productos.filter(prod => prod.categoria == categoria);
            if (produtos.length > 0 && categoria == enum_productos_1.TipoProductos.Macetero) {
                return this.servicioMaceteros.findAll();
            }
        }
        return null;
    }
    obtCantidadProductos() {
        const cantidadProductos = this.productos.length;
        return cantidadProductos;
    }
    createMacetero(createMaceteroDto) {
        const idProducto = this.obtCantidadProductos() + 1;
        const codigoProducto = this.servicioMaceteros.createCodigoMacetero();
        const productoMacetero = new producto_entity_1.Producto(idProducto, createMaceteroDto.nombreProducto, createMaceteroDto.imagenProducto, createMaceteroDto.descuento, createMaceteroDto.precioNormal, createMaceteroDto.coberturaDeDespacho, createMaceteroDto.stock, createMaceteroDto.descripcionProducto, enum_productos_1.TipoProductos.Macetero, 0, 0, codigoProducto);
        this.productos.push(productoMacetero);
        const maceteroCreado = this.servicioMaceteros.create(createMaceteroDto, idProducto, codigoProducto);
        return maceteroCreado;
    }
    findOne(codigoProducto) {
        const tipoProducto = this.productos.find(prod => prod.codigoProducto == codigoProducto.toUpperCase().trim());
        if (!tipoProducto) {
            throw new error_plantopia_1.ErrorPlantopia('No encontrado', 404);
        }
        const categoria = tipoProducto.categoria;
        const idProducto = tipoProducto.idProducto;
        if (categoria == enum_productos_1.TipoProductos.Macetero) {
            return this.servicioMaceteros.findOne(idProducto);
        }
    }
    bestSellers() {
        if (this.productos.length == 0) {
            throw new error_plantopia_1.ErrorPlantopia('No encontrado', 404);
        }
        const total_productos = this.productos.length - 1;
        const total_ventas = this.productos
            .filter(a => a.cantidadVentas > 0)
            .reduce((sum, a) => sum + a.cantidadVentas, 0);
        if (total_ventas == 0) {
            throw new error_plantopia_1.ErrorPlantopia('No encontrado', 404);
        }
        const promedio = total_ventas / total_productos;
        const productosMasVentas = this.productos
            .filter(a => a.cantidadVentas > promedio)
            .sort((a, b) => b.cantidadVentas - a.cantidadVentas);
        return productosMasVentas;
    }
    findOneID(id) {
        const productoBuscado = this.productos.filter(prod => prod.idProducto == id);
        if (!productoBuscado) {
            throw new error_plantopia_1.ErrorPlantopia('Producto No encontrado', 404);
        }
        return productoBuscado;
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [maceteros_service_1.MaceterosService])
], ProductosService);
//# sourceMappingURL=productos.service.js.map