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
exports.EquipoService = void 0;
const common_1 = require("@nestjs/common");
const Area_1 = require("../models/Area");
let EquipoService = class EquipoService {
    constructor() {
        this.ecommerce = {
            nombre: 'Plantopía',
            descripcion: 'Una tienda en línea para productos de plantas.',
            tipo: 'E-commerce B2C',
            objetivoGeneral: "Construir una tienda intuitiva, diseñada para optimizar el tiempo y las necesidades del usuario.",
            objetivosEspecificos: ['Ampliar el acceso a la compra de insumos para plantas',
                'Facilitar la compra informada a través de búsquedas personalizadas.',
                'Ofrecer servicios de suscripción de mantenimiento.', 'Expandir el catálogo'],
        };
        this.nombreEquipo = "Green Roots";
        this.jefeEquipo = "María Elena Valencia";
        this.equipo = [
            new Area_1.Area("Diseño_UX_UI", "Amalia Luna", [
                "Amalia Luna",
                "Valeria Gutiérrez",
                "Macarena Campos",
                "Valentina Tabilo"
            ]),
            new Area_1.Area("Front-End", "Cristian Levio", [
                "Cristian Levio",
                "Sebastián Rubilar",
                "Esteban Menares"
            ]),
            new Area_1.Area("Back-End", "Christian Castillo", [
                "Christian Castillo",
                "Flor Granados",
                "Rodrigo Cabello",
                "Camilo Orellana"
            ]),
            new Area_1.Area("Mobile", "María Elena Valencia", [
                "María Elena Valencia"
            ])
        ];
    }
    getEquipo() {
        let areas = [];
        let integrantes = [];
        for (let index = 0; index < this.equipo.length; index++) {
            areas.push(this.equipo[index].nombreArea);
            for (let y = 0; y < this.equipo[index].miembros.length; y++) {
                integrantes.push(this.equipo[index].miembros[y]);
            }
        }
        return {
            nombreEquipo: this.nombreEquipo,
            liderEquipo: this.jefeEquipo,
            equipo: this.equipo.map(area => ({
                nombreArea: area.nombreArea,
                jefe: area.jefe,
                miembros: area.miembros
            }))
        };
    }
    getEcommerce() {
        return this.ecommerce;
    }
    getAreas(nombreArea) {
        if (nombreArea) {
            return this.equipo.filter(area => area.nombreArea.toLowerCase() === nombreArea.toLowerCase());
        }
        return this.equipo;
    }
};
exports.EquipoService = EquipoService;
exports.EquipoService = EquipoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EquipoService);
//# sourceMappingURL=equipo.service.js.map