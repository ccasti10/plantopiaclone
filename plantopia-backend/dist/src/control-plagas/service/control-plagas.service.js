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
exports.ControlPlagasService = void 0;
const common_1 = require("@nestjs/common");
const control_plagas_entity_1 = require("../entities/control-plagas.entity");
const enum_productos_1 = require("../../productos/entities/enum-productos");
const enum_control_plagas_1 = require("../entities/enum-control-plagas");
let ControlPlagasService = class ControlPlagasService {
    constructor() {
        this.controlPlagas = [];
        this.controlPlagas = [
            new control_plagas_entity_1.ControlPlagas(1, 'Aceite de neem', ['https://autoherb.cl/producto/aceite-neem/'], 0, 5000, ['Arica a Pta.Arenas'], 100, 'Aceite para el control de plagas como pulgones, cochinillas y ácaros.', enum_productos_1.TipoProductos.ControlPlagas, 4.5, 50, 'CP1', [enum_control_plagas_1.TipoPlaga.PULGONES, enum_control_plagas_1.TipoPlaga.COCHINILLAS, enum_control_plagas_1.TipoPlaga.ACAROS], 'Aceite de neem (azadiractina)', [enum_control_plagas_1.MetodoAplicacion.SPRAY_FOLIAR], 'Cada 7-14 días según la infestación', 'Seguridad para mascotas, evitar el contacto con los ojos y piel.', enum_control_plagas_1.Eficacia.ALTA, true),
            new control_plagas_entity_1.ControlPlagas(2, 'Jabon potásico', ['https://www.jumbo.cl/jabon-potasico-popeye-ecofriendly-1-l-1901730/p?idsku=117690&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnPffNH36xHASuTqi98qIqqiz7N_GOLKxuLmhU7hGgN6gBUbQgV1O_4aAgH8EALw_wcB&gclsrc=aw.ds'], 0, 3000, ['Arica a Pta.Arenas'], 150, 'Jabón potásico para control de pulgones, mosca blanca y cochinillas.', enum_productos_1.TipoProductos.ControlPlagas, 4.2, 30, 'CP2', [enum_control_plagas_1.TipoPlaga.PULGONES, enum_control_plagas_1.TipoPlaga.MOSCA_BLANCA, enum_control_plagas_1.TipoPlaga.COCHINILLAS], 'Sales potásicas', [enum_control_plagas_1.MetodoAplicacion.SPRAY_FOLIAR], 'Cada 7 días hasta controlar la plaga', 'Seguro para mascotas y plantas, evitar sobredosificación.', enum_control_plagas_1.Eficacia.MEDIA, true),
            new control_plagas_entity_1.ControlPlagas(3, 'Tierra de diatomeas', ['https://www.deraizchile.cl/products/diatomeas-jardines-y-fertilizantes?variant=40835675259062&currency=CLP&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnPvAS6Eb97Wl4miGn-B-HeFm6nRTFNtATS0-mP-MKIdWWhQ7y9eitwaAgwFEALw_wcB'], 0, 8000, ['Arica a Pta.Arenas'], 120, 'Polvo de silicio para control de hormigas, cochinillas y pulgones.', enum_productos_1.TipoProductos.ControlPlagas, 4.7, 40, 'CP3', [enum_control_plagas_1.TipoPlaga.HORMIGAS, enum_control_plagas_1.TipoPlaga.COCHINILLAS, enum_control_plagas_1.TipoPlaga.PULGONES], 'Silicio (polvo)', [enum_control_plagas_1.MetodoAplicacion.ESPOLVOREADO_SUELO], 'Aplicación única, repetir si es necesario', 'Evitar inhalación, uso de guantes recomendado.', enum_control_plagas_1.Eficacia.ALTA, true),
            new control_plagas_entity_1.ControlPlagas(4, 'Fungicida de azufre', ['https://tiendachagual.cl/producto/sulforte-500ml-chakrana/?utm_source=Google%20Shopping&utm_campaign=Productos%20Chagual%202022&utm_medium=cpc&utm_term=68050&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnOSrPBfmZhyKTaVJCwCxewtoNwJWqUJCVBGF_6mf6ujxECLzIBLgGkaApoMEALw_wcB'], 0, 7000, ['Arica a Pta.Arenas'], 80, 'Azufre micronizado para hongos como mildiu y oídio.', enum_productos_1.TipoProductos.ControlPlagas, 4.4, 60, 'CP4', [enum_control_plagas_1.TipoPlaga.HONGOS_MILDIU], 'Azufre micronizado', [enum_control_plagas_1.MetodoAplicacion.SPRAY_FOLIAR, enum_control_plagas_1.MetodoAplicacion.APLICACION_SUELO], 'Cada 10-14 días durante la temporada', 'Evitar inhalación y contacto con ojos.', enum_control_plagas_1.Eficacia.MEDIA, true),
            new control_plagas_entity_1.ControlPlagas(5, 'Aceite de horticultura', ['https://www.amazon.com/-/es/Fertiloma-16042-Aceite-horticultura-Listado/dp/B0BLRLCB9N'], 0, 6000, ['Arica a Pta.Arenas'], 90, 'Aceite mineral para el control de ácaros, cochinillas y escamas.', enum_productos_1.TipoProductos.ControlPlagas, 4.6, 35, 'CP5', [enum_control_plagas_1.TipoPlaga.ACAROS, enum_control_plagas_1.TipoPlaga.COCHINILLAS, enum_control_plagas_1.TipoPlaga.ESCAMAS], 'Aceite mineral', [enum_control_plagas_1.MetodoAplicacion.SPRAY_FOLIAR], 'Cada 7-10 días', 'Aplicar en lugares ventilados, puede ser irritante.', enum_control_plagas_1.Eficacia.ALTA, true)
        ];
    }
    create(createControlPlagasDto, idProducto, codigoProducto) {
        const creControlPLagas = new control_plagas_entity_1.ControlPlagas(idProducto, createControlPlagasDto.nombreProducto, createControlPlagasDto.imagenProducto, createControlPlagasDto.descuento, createControlPlagasDto.precioNormal, createControlPlagasDto.coberturaDeDespacho, createControlPlagasDto.stock, createControlPlagasDto.descripcionProducto, enum_productos_1.TipoProductos.ControlPlagas, 0, 0, codigoProducto, createControlPlagasDto.TipoPlagaControlada, createControlPlagasDto.composicion, createControlPlagasDto.metodoAplicacion, createControlPlagasDto.frecuenciaAplicacion, createControlPlagasDto.precauciones, createControlPlagasDto.eficacia, createControlPlagasDto.Toxicidad);
        this.controlPlagas.push(creControlPLagas);
        return creControlPLagas;
    }
    obtCantidadControlPlagas() {
        const cantidadControlPLagas = this.controlPlagas.length;
        return cantidadControlPLagas;
    }
    createCodigoControlPlagas() {
        const numeroCodigo = this.obtCantidadControlPlagas() + 1;
        const codigoControlPlagas = 'CP' + numeroCodigo;
        return codigoControlPlagas;
    }
    findAll() {
        return this.controlPlagas;
    }
    findOne(id) {
        const controlPlagaEncontrado = this.controlPlagas.find(prod => prod.idProducto === id);
        if (controlPlagaEncontrado) {
            return controlPlagaEncontrado;
        }
        return null;
    }
};
exports.ControlPlagasService = ControlPlagasService;
exports.ControlPlagasService = ControlPlagasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ControlPlagasService);
//# sourceMappingURL=control-plagas.service.js.map