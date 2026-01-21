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
exports.SustratosService = void 0;
const common_1 = require("@nestjs/common");
const sustrato_entity_1 = require("../entities/sustrato.entity");
const enum_sustratos_1 = require("../entities/enum-sustratos");
const enum_productos_1 = require("../../productos/entities/enum-productos");
const enum_fertilizantes_1 = require("../../fertilizantes/entities/enum-fertilizantes");
let SustratosService = class SustratosService {
    constructor() {
        this.sustratos = [];
        this.sustratos = [
            new sustrato_entity_1.Sustrato(32, "Sustrato Universal Nutritivo", ["https://sodimac.scene7.com/is/image/SodimacCL/4764071?wid=800&hei=800&qlt=70"], 0, 4990, ["Arica a Pta.Arenas"], 50, "Sustrato universal ideal para todo tipo de plantas.", enum_productos_1.TipoProductos.Sustratos, 4.5, 1000, "SU1", [enum_sustratos_1.ComposicionSustrato.TURBA, enum_sustratos_1.ComposicionSustrato.MATERIAORGANICA], [enum_sustratos_1.TexturaSustrato.SUELTO, enum_sustratos_1.TexturaSustrato.MEDIO], "Buen drenaje", enum_fertilizantes_1.TipoPlantasRecomendadas.PLANTAS_INTERIOR, "Ideal para plantas de interior y exterior."),
            new sustrato_entity_1.Sustrato(33, "Sustrato para Cactus y Suculentas", ["https://sodimac.scene7.com/is/image/SodimacCL/4784856?wid=800&hei=800&qlt=70"], 0, 2990, ["Arica a Pta.Arenas"], 30, "Sustrato especializado para cactus y suculentas.", enum_productos_1.TipoProductos.Sustratos, 4.8, 1500, "SU2", [enum_sustratos_1.ComposicionSustrato.ARENA, enum_sustratos_1.ComposicionSustrato.GRAVA], [enum_sustratos_1.TexturaSustrato.GRUESO], "Excelente drenaje", enum_fertilizantes_1.TipoPlantasRecomendadas.SUCULENTASCACTUS, "Previene la acumulación de agua en las raíces."),
            new sustrato_entity_1.Sustrato(34, "Sustrato para Orquídeas", ["https://sodimac.scene7.com/is/image/SodimacCL/4764075?wid=800&hei=800&qlt=70"], 0, 5990, ["Arica a Pta.Arenas"], 40, "Sustrato especial para el cultivo de orquídeas.", enum_productos_1.TipoProductos.Sustratos, 4.7, 800, "SU3", [enum_sustratos_1.ComposicionSustrato.CORTEZA, enum_sustratos_1.ComposicionSustrato.CARBON_VEGETAL], [enum_sustratos_1.TexturaSustrato.FINA], "Drenaje moderado", enum_fertilizantes_1.TipoPlantasRecomendadas.ORQUIDIAS, "Optimiza la aireación de las raíces."),
            new sustrato_entity_1.Sustrato(35, "Sustrato para Huerto Urbano", ["https://sodimac.scene7.com/is/image/SodimacCL/4764084?wid=800&hei=800&qlt=70"], 0, 7990, ["Arica a Pta.Arenas"], 25, "Sustrato para el cultivo de hortalizas en huertos urbanos.", enum_productos_1.TipoProductos.Sustratos, 4.6, 1200, "SU4", [enum_sustratos_1.ComposicionSustrato.HUMMUS, enum_sustratos_1.ComposicionSustrato.COMPOST], [enum_sustratos_1.TexturaSustrato.MEDIO], "Drenaje excelente", enum_fertilizantes_1.TipoPlantasRecomendadas.HORTALIZAS, "Rico en nutrientes esenciales."),
            new sustrato_entity_1.Sustrato(36, "Sustrato para Bonsái", ["https://sodimac.scene7.com/is/image/SodimacCL/4764068?wid=800&hei=800&qlt=70"], 0, 8990, ["Arica a Pta.Arenas"], 20, "Sustrato especializado para bonsáis.", enum_productos_1.TipoProductos.Sustratos, 4.9, 600, "SU5", [enum_sustratos_1.ComposicionSustrato.ARENA_VOLCANICA, enum_sustratos_1.ComposicionSustrato.GRAVA], [enum_sustratos_1.TexturaSustrato.GRUESO], "Drenaje óptimo", enum_fertilizantes_1.TipoPlantasRecomendadas.BONSAI, "Permite el desarrollo adecuado de raíces.")
        ];
    }
    obtCantidad() {
        const cantidad = this.sustratos.length;
        return cantidad;
    }
    createCodigo() {
        const numeroCodigo = this.obtCantidad() + 1;
        const codigo = 'SU' + numeroCodigo;
        return codigo;
    }
    create(cretaSustratoDto, idProducto, codigoProducto) {
        const creSustrato = new sustrato_entity_1.Sustrato(idProducto, cretaSustratoDto.nombreProducto, cretaSustratoDto.imagenProducto, cretaSustratoDto.descuento, cretaSustratoDto.precioNormal, cretaSustratoDto.coberturaDeDespacho, cretaSustratoDto.stock, cretaSustratoDto.descripcionProducto, enum_productos_1.TipoProductos.Sustratos, 0, 0, codigoProducto, cretaSustratoDto.composicion, cretaSustratoDto.textura, cretaSustratoDto.drenaje, cretaSustratoDto.plantasRecomendadas, cretaSustratoDto.observaciones);
        this.sustratos.push(creSustrato);
        return creSustrato;
    }
    findAll() {
        return this.sustratos;
    }
    findOne(id) {
        const sustratoEncontrado = this.sustratos.find(prod => prod.idProducto === id);
        if (sustratoEncontrado) {
            return sustratoEncontrado;
        }
        return null;
    }
    update(id, updateSustratoDto) {
        return `This action updates a #${id} sustrato`;
    }
    remove(id) {
        return `This action removes a #${id} sustrato`;
    }
};
exports.SustratosService = SustratosService;
exports.SustratosService = SustratosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SustratosService);
//# sourceMappingURL=sustratos.service.js.map