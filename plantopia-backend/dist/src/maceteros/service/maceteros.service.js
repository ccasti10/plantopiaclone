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
        this.maceteros = [
            new macetero_entity_1.Macetero(11, 'Macetero de plástico redondo 40 cm', ['https://www.sodimac.cl/sodimac-cl/product/267970X/Macetero-circular-plastico-40-cm-Gris/267970X'], 10, 14990, ['Arica a Pta.Arenas'], 20, 'Macetero redondo de plástico, ideal para interiores y exteriores.', enum_productos_1.TipoProductos.Macetero, 4.5, 150, 'MA1', 40, 40, 1.5, 15, 'Plástico', 'Gris', enum_macetero_1.FormaMacetero.Rectangular),
            new macetero_entity_1.Macetero(28, 'Macetero cerámica grande', ['https://www.paris.cl/macetero-de-ceramica-grande-955204999.html'], 15, 24990, ['Arica a Pta.Arenas'], 10, 'Macetero de cerámica de diseño moderno.', enum_productos_1.TipoProductos.Macetero, 4.7, 80, 'MA2', 45, 35, 7, 25, 'Cerámica', 'Blanco', enum_macetero_1.FormaMacetero.Circular),
            new macetero_entity_1.Macetero(29, 'Macetero colgante fibra natural', ['https://www.falabella.com/falabella-cl/product/881594174/Macetero-colgante-de-fibra-natural/881594174'], 5, 9990, ['Arica a Pta.Arenas'], 30, 'Macetero colgante de fibra natural.', enum_productos_1.TipoProductos.Macetero, 4.2, 120, 'MA3', 30, 25, 0.8, 8, 'Fibra natural', 'Beige', enum_macetero_1.FormaMacetero.Circular),
            new macetero_entity_1.Macetero(30, 'Macetero metálico con soporte', ['https://www.easy.cl/tienda/producto/macetero-metal-con-soporte-urban-xl-negro-1282984'], 20, 29990, ['Arica a Pta.Arenas'], 5, 'Macetero de metal con soporte de madera.', enum_productos_1.TipoProductos.Macetero, 4.8, 50, 'MA4', 50, 30, 5, 20, 'Metal', 'Negro', enum_macetero_1.FormaMacetero.Rectangular),
            new macetero_entity_1.Macetero(31, 'Macetero cuadrado de cemento', ['https://www.sodimac.cl/sodimac-cl/product/1154031/Macetero-cemento-cubo-35x35-cm-Gris/1154031'], 12, 18990, ['Arica a Pta.Arenas'], 15, 'Macetero de cemento con acabado rústico.', enum_productos_1.TipoProductos.Macetero, 4.6, 60, 'MA5', 35, 35, 9, 18, 'Cemento', 'Gris oscuro', enum_macetero_1.FormaMacetero.Circular)
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