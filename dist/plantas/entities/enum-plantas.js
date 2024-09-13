"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrecuenciaDeRiego = exports.NivelDeHumedad = exports.TipoDeSuelo = exports.DificultadDeCuidado = exports.Habitad = exports.Estacion = exports.LuzRequerida = void 0;
var LuzRequerida;
(function (LuzRequerida) {
    LuzRequerida["ALTA"] = "Alta";
    LuzRequerida["MEDIA"] = "Media";
    LuzRequerida["BAJA"] = "Baja";
})(LuzRequerida || (exports.LuzRequerida = LuzRequerida = {}));
var Estacion;
(function (Estacion) {
    Estacion["PRIMAVERA"] = "Primavera";
    Estacion["VERANO"] = "Verano";
    Estacion["OTONO"] = "Oto\u00F1o";
    Estacion["INVIERNO"] = "Invierno";
    Estacion["CUALQUIERA"] = "Cualquiera";
})(Estacion || (exports.Estacion = Estacion = {}));
var Habitad;
(function (Habitad) {
    Habitad["INTERIOR"] = "Interior";
    Habitad["EXTERIOR"] = "Exterior";
    Habitad["CUALQUIERA"] = "Cualquiera";
})(Habitad || (exports.Habitad = Habitad = {}));
var DificultadDeCuidado;
(function (DificultadDeCuidado) {
    DificultadDeCuidado["BAJA"] = "Baja";
    DificultadDeCuidado["MEDIA"] = "Media";
    DificultadDeCuidado["ALTA"] = "Alta";
})(DificultadDeCuidado || (exports.DificultadDeCuidado = DificultadDeCuidado = {}));
var TipoDeSuelo;
(function (TipoDeSuelo) {
    TipoDeSuelo["ARENOSO"] = "Arenoso";
    TipoDeSuelo["ARCILLOSO"] = "Arcilloso";
    TipoDeSuelo["LIMOSO"] = "Limoso";
    TipoDeSuelo["TURBA"] = "Turba";
})(TipoDeSuelo || (exports.TipoDeSuelo = TipoDeSuelo = {}));
var NivelDeHumedad;
(function (NivelDeHumedad) {
    NivelDeHumedad["BAJA"] = "Baja";
    NivelDeHumedad["MEDIA"] = "Media";
    NivelDeHumedad["ALTA"] = "Alta";
})(NivelDeHumedad || (exports.NivelDeHumedad = NivelDeHumedad = {}));
var FrecuenciaDeRiego;
(function (FrecuenciaDeRiego) {
    FrecuenciaDeRiego["DIARIO"] = "Diario";
    FrecuenciaDeRiego["SEMANAL"] = "Semanal";
    FrecuenciaDeRiego["QUINCENAL"] = "Quincenal";
    FrecuenciaDeRiego["MENSUAL"] = "Mensual";
})(FrecuenciaDeRiego || (exports.FrecuenciaDeRiego = FrecuenciaDeRiego = {}));
//# sourceMappingURL=enum-plantas.js.map