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
exports.PlantasService = void 0;
const common_1 = require("@nestjs/common");
const enum_productos_1 = require("../../productos/entities/enum-productos");
const enum_plantas_1 = require("../entities/enum-plantas");
const planta_entity_1 = require("../entities/planta.entity");
let PlantasService = class PlantasService {
    constructor() {
        this.plantas = [];
        this.plantas = [
            new planta_entity_1.Planta(12, 'Cactus Opuntia', [
                'https://acdn.mitiendanube.com/stores/001/202/679/products/opuntia-microdasys-amarilla11-f96f80e136ac2b347816196560098082-1024-1024.webp'
            ], 10, 8360, ['Arica a Pta.Arenas'], 10, 'Es un cactus firme y decorativo.', enum_productos_1.TipoProductos.Planta, 4, 150, 'PL1', enum_plantas_1.Habitat.INTERIOR, enum_plantas_1.LuzRequerida.ALTA, enum_plantas_1.FrecuenciaDeRiego.MENSUAL, enum_plantas_1.NivelDeHumedad.BAJA, 20, false, 150, enum_plantas_1.TipoDeSuelo.ARENOSO, enum_plantas_1.DificultadDeCuidado.BAJA, enum_plantas_1.Estacion.PRIMAVERA, [], []),
            new planta_entity_1.Planta(13, 'Lengua de Suegra', [
                'https://lepotit.cl/cdn/shop/products/SansevieriaMAutorreganteSblanco_860x.jpg?v=1633118960',
            ], 12, 12900, ['Arica a Pta.Arenas'], 55, 'Es una planta de interior popular.', enum_productos_1.TipoProductos.Planta, 1, 100, 'PL2', enum_plantas_1.Habitat.INTERIOR, enum_plantas_1.LuzRequerida.ALTA, enum_plantas_1.FrecuenciaDeRiego.MENSUAL, enum_plantas_1.NivelDeHumedad.BAJA, 18, true, 150, enum_plantas_1.TipoDeSuelo.ARCILLOSO, enum_plantas_1.DificultadDeCuidado.BAJA, enum_plantas_1.Estacion.PRIMAVERA, [], []),
            new planta_entity_1.Planta(14, 'Lirio de Agua', [
                'https://acdn.mitiendanube.com/stores/001/202/679/products/231-ad700e1f90d14e71ed16246336798562-1024-1024.webp',
            ], 20, 8360, ['Arica a Pta.Arenas'], 12, 'Es una planta acuática decorativa.', enum_productos_1.TipoProductos.Planta, 4, 120, 'PL3', enum_plantas_1.Habitat.INTERIOR, enum_plantas_1.LuzRequerida.MEDIA, enum_plantas_1.FrecuenciaDeRiego.MENSUAL, enum_plantas_1.NivelDeHumedad.MEDIA, 22, false, 200, enum_plantas_1.TipoDeSuelo.ARCILLOSO, enum_plantas_1.DificultadDeCuidado.MEDIA, enum_plantas_1.Estacion.VERANO, [], []),
            new planta_entity_1.Planta(15, 'Monstera deliciosa', [
                'https://www.kenaz.cl/cdn/shop/products/monstera-946603.jpg?v=1718161088&width=600',
            ], 17, 7456, ['Arica a Pta.Arenas'], 10, 'Es una planta tropical ideal para interiores.', enum_productos_1.TipoProductos.Planta, 3, 130, 'PL4', enum_plantas_1.Habitat.INTERIOR, enum_plantas_1.LuzRequerida.MEDIA, enum_plantas_1.FrecuenciaDeRiego.SEMANAL, enum_plantas_1.NivelDeHumedad.ALTA, 25, true, 180, enum_plantas_1.TipoDeSuelo.TURBA, enum_plantas_1.DificultadDeCuidado.MEDIA, enum_plantas_1.Estacion.OTONO, [], []),
            new planta_entity_1.Planta(16, 'Helecho', [
                'https://cdnx.jumpseller.com/mentaconcept/image/41835179/resize/480/480?1699388964',
            ], 18, 9000, ['Arica a Pta.Arenas'], 32, 'Es una planta común en ambientes húmedos.', enum_productos_1.TipoProductos.Planta, 2, 180, 'PL5', enum_plantas_1.Habitat.INTERIOR, enum_plantas_1.LuzRequerida.MEDIA, enum_plantas_1.FrecuenciaDeRiego.SEMANAL, enum_plantas_1.NivelDeHumedad.ALTA, 23, false, 300, enum_plantas_1.TipoDeSuelo.TURBA, enum_plantas_1.DificultadDeCuidado.MEDIA, enum_plantas_1.Estacion.VERANO, [], []),
            new planta_entity_1.Planta(17, 'Ficus lyrata', [
                'https://viverolosaromos.com/wp-content/uploads/2023/11/EXALTATA-HELECHO-510x510.webp',
            ], 22, 5779, ['Arica a Pta.Arenas'], 20, 'Es una planta popular de gran tamaño.', enum_productos_1.TipoProductos.Planta, 5, 300, 'PL6', enum_plantas_1.Habitat.INTERIOR, enum_plantas_1.LuzRequerida.MEDIA, enum_plantas_1.FrecuenciaDeRiego.SEMANAL, enum_plantas_1.NivelDeHumedad.MEDIA, 20, false, 400, enum_plantas_1.TipoDeSuelo.LIMOSO, enum_plantas_1.DificultadDeCuidado.MEDIA, enum_plantas_1.Estacion.PRIMAVERA, [], []),
            new planta_entity_1.Planta(18, 'Filodendro Longipetiolatum', [
                'https://www.kenaz.cl/cdn/shop/products/peperomia-cucharita-561186.jpg?v=1701109062&width=600',
            ], 30, 5320, ['Arica a Pta.Arenas'], 100, 'Es una planta tropical común.', enum_productos_1.TipoProductos.Planta, 1, 90, 'PL7', enum_plantas_1.Habitat.INTERIOR, enum_plantas_1.LuzRequerida.ALTA, enum_plantas_1.FrecuenciaDeRiego.SEMANAL, enum_plantas_1.NivelDeHumedad.MEDIA, 22, false, 180, enum_plantas_1.TipoDeSuelo.ARCILLOSO, enum_plantas_1.DificultadDeCuidado.MEDIA, enum_plantas_1.Estacion.PRIMAVERA, [], []),
            new planta_entity_1.Planta(19, 'Peperomia obtusifolia', [
                'https://d17jkdlzll9byv.cloudfront.net/wp-content/uploads/2023/06/ficus-lyrata-0002-900x900.jpg',
            ], 25, 9425, ['Arica a Pta.Arenas'], 34, 'Es una planta compacta y popular en interiores.', enum_productos_1.TipoProductos.Planta, 2, 120, 'PL8', enum_plantas_1.Habitat.INTERIOR, enum_plantas_1.LuzRequerida.MEDIA, enum_plantas_1.FrecuenciaDeRiego.SEMANAL, enum_plantas_1.NivelDeHumedad.MEDIA, 18, true, 200, enum_plantas_1.TipoDeSuelo.TURBA, enum_plantas_1.DificultadDeCuidado.MEDIA, enum_plantas_1.Estacion.OTONO, [], []),
            new planta_entity_1.Planta(20, 'Pilea peperomioides', [
                'https://www.aprilplants.com/cdn/shop/products/Eucalipto_silver_dollar_copa_22o_cocoblanca_planta-de-exterior-aromatica_1024x.jpg?v=1679046875',
            ], 40, 7530, ['Arica a Pta.Arenas'], 25, 'Es una planta compacta y decorativa.', enum_productos_1.TipoProductos.Planta, 1, 100, 'PL9', enum_plantas_1.Habitat.INTERIOR, enum_plantas_1.LuzRequerida.ALTA, enum_plantas_1.FrecuenciaDeRiego.SEMANAL, enum_plantas_1.NivelDeHumedad.MEDIA, 22, false, 300, enum_plantas_1.TipoDeSuelo.TURBA, enum_plantas_1.DificultadDeCuidado.MEDIA, enum_plantas_1.Estacion.OTONO, [], []),
            new planta_entity_1.Planta(21, 'Dollar variegado', [
                'https://d17jkdlzll9byv.cloudfront.net/wp-content/uploads/2024/02/philodendron-longifolio-00001.jpg',
            ], 30, 6900, ['Arica a Pta.Arenas'], 50, 'Es una planta tropical de hojas variegadas.', enum_productos_1.TipoProductos.Planta, 4, 200, 'PL10', enum_plantas_1.Habitat.INTERIOR, enum_plantas_1.LuzRequerida.ALTA, enum_plantas_1.FrecuenciaDeRiego.SEMANAL, enum_plantas_1.NivelDeHumedad.ALTA, 22, true, 300, enum_plantas_1.TipoDeSuelo.ARCILLOSO, enum_plantas_1.DificultadDeCuidado.ALTA, enum_plantas_1.Estacion.VERANO, [], []),
            new planta_entity_1.Planta(22, 'Oulluy', ['https://m.media-amazon.com/images/I/51rjakslj5L._AC_SX569_.jpg'], 50, 9120, ['Arica a Pta.Arenas'], 60, 'Es una planta suculenta decorativa.', enum_productos_1.TipoProductos.Planta, 5, 300, 'PL11', enum_plantas_1.Habitat.INTERIOR, enum_plantas_1.LuzRequerida.ALTA, enum_plantas_1.FrecuenciaDeRiego.SEMANAL, enum_plantas_1.NivelDeHumedad.MEDIA, 24, true, 300, enum_plantas_1.TipoDeSuelo.TURBA, enum_plantas_1.DificultadDeCuidado.MEDIA, enum_plantas_1.Estacion.VERANO, [], []),
            new planta_entity_1.Planta(23, 'Begonia', [
                'https://vitaflor.cl/wp-content/uploads/2022/12/aloe-striata-1536x1152.jpg.webp',
            ], 30, 1110, ['Arica a Pta.Arenas'], 100, 'Es una planta ornamental común.', enum_productos_1.TipoProductos.Planta, 1, 100, 'PL12', enum_plantas_1.Habitat.INTERIOR, enum_plantas_1.LuzRequerida.MEDIA, enum_plantas_1.FrecuenciaDeRiego.SEMANAL, enum_plantas_1.NivelDeHumedad.ALTA, 20, false, 180, enum_plantas_1.TipoDeSuelo.LIMOSO, enum_plantas_1.DificultadDeCuidado.MEDIA, enum_plantas_1.Estacion.VERANO, [], []),
            new planta_entity_1.Planta(24, 'Alocasia', [
                'https://imgix.be.green/63860658cd20e331480209.jpg?w=1200&h=1200&auto=compress',
            ], 15, 5150, ['Arica a Pta.Arenas'], 45, 'Es una planta de interior elegante y tropical.', enum_productos_1.TipoProductos.Planta, 1, 90, 'PL13', enum_plantas_1.Habitat.INTERIOR, enum_plantas_1.LuzRequerida.ALTA, enum_plantas_1.FrecuenciaDeRiego.MENSUAL, enum_plantas_1.NivelDeHumedad.ALTA, 22, true, 120, enum_plantas_1.TipoDeSuelo.LIMOSO, enum_plantas_1.DificultadDeCuidado.MEDIA, enum_plantas_1.Estacion.PRIMAVERA, [], []),
            new planta_entity_1.Planta(25, 'Syngonium', [
                'https://www.cactussuculovers.cl/wp-content/uploads/2020/08/086b3977-dab8-4a35-bbcd-0b93596504ce-copia.jpg',
            ], 18, 6150, ['Arica a Pta.Arenas'], 34, 'Es una planta decorativa de hojas en forma de flecha.', enum_productos_1.TipoProductos.Planta, 2, 80, 'PL14', enum_plantas_1.Habitat.INTERIOR, enum_plantas_1.LuzRequerida.MEDIA, enum_plantas_1.FrecuenciaDeRiego.SEMANAL, enum_plantas_1.NivelDeHumedad.ALTA, 24, false, 140, enum_plantas_1.TipoDeSuelo.TURBA, enum_plantas_1.DificultadDeCuidado.MEDIA, enum_plantas_1.Estacion.OTONO, [], []),
            new planta_entity_1.Planta(26, 'Pachira Aquatica', [
                'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRD4KlhDv3R0dc7SRP8XjrDIRjumKFmpv1J6pA2tW_XQ6JgsXUl',
            ], 22, 7530, ['Arica a Pta.Arenas'], 50, 'Es una planta de interior con tronco decorativo.', enum_productos_1.TipoProductos.Planta, 3, 120, 'PL15', enum_plantas_1.Habitat.INTERIOR, enum_plantas_1.LuzRequerida.ALTA, enum_plantas_1.FrecuenciaDeRiego.SEMANAL, enum_plantas_1.NivelDeHumedad.MEDIA, 20, true, 200, enum_plantas_1.TipoDeSuelo.LIMOSO, enum_plantas_1.DificultadDeCuidado.MEDIA, enum_plantas_1.Estacion.VERANO, [], []),
            new planta_entity_1.Planta(27, 'Begonia Rex', [
                'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRD4KlhDv3R0dc7SRP8XjrDIRjumKFmpv1J6pA2tW_XQ6JgsXUl',
            ], 10, 6100, ['Arica a Pta.Arenas'], 60, 'Es una begonia decorativa con hojas de colores vivos.', enum_productos_1.TipoProductos.Planta, 2, 110, 'PL16', enum_plantas_1.Habitat.INTERIOR, enum_plantas_1.LuzRequerida.MEDIA, enum_plantas_1.FrecuenciaDeRiego.SEMANAL, enum_plantas_1.NivelDeHumedad.ALTA, 18, true, 100, enum_plantas_1.TipoDeSuelo.TURBA, enum_plantas_1.DificultadDeCuidado.ALTA, enum_plantas_1.Estacion.PRIMAVERA, [], []),
        ];
    }
    obtCantidadPlantas() {
        const cantidadPlantas = this.plantas.length;
        return cantidadPlantas;
    }
    createCodigoPlanta() {
        const numeroCodigo = this.obtCantidadPlantas() + 1;
        const codigoPLanta = 'PL' + numeroCodigo;
        return codigoPLanta;
    }
    create(createPlantaDto, idProducto, codigoProducto) {
        const crePlanta = new planta_entity_1.Planta(idProducto, createPlantaDto.nombreProducto, createPlantaDto.imagenProducto, createPlantaDto.descuento, createPlantaDto.precioNormal, createPlantaDto.coberturaDeDespacho, createPlantaDto.stock, createPlantaDto.descripcionProducto, enum_productos_1.TipoProductos.Planta, 0, 0, codigoProducto, createPlantaDto.habitat, createPlantaDto.luz, createPlantaDto.frecuenciaDeRiego, createPlantaDto.humedadIdeal, createPlantaDto.temperaturaIdeal, createPlantaDto.toxicidadMascotas, createPlantaDto.tamanoMaximo, createPlantaDto.tipoSuelo, createPlantaDto.dificultadDeCuidado, createPlantaDto.estacion, createPlantaDto.fertilizantesSugeridos, createPlantaDto.sustratosSugeridos);
        this.plantas.push(crePlanta);
        return crePlanta;
    }
    findAll() {
        return this.plantas;
    }
    findOne(id) {
        const plantaEncontrada = this.plantas.find((prod) => prod.idProducto === id);
        if (plantaEncontrada) {
            return plantaEncontrada;
        }
        return null;
    }
};
exports.PlantasService = PlantasService;
exports.PlantasService = PlantasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PlantasService);
//# sourceMappingURL=plantas.service.js.map