"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eficacia = exports.MetodoAplicacion = exports.ComposicionControlPlaga = exports.TipoPlaga = void 0;
var TipoPlaga;
(function (TipoPlaga) {
    TipoPlaga["PULGONES"] = "Pulgones";
    TipoPlaga["COCHINILLAS"] = "Cochinillas";
    TipoPlaga["ACAROS"] = "Acaros";
    TipoPlaga["MOSCA_BLANCA"] = "Mosca Blanca ";
    TipoPlaga["INSECTOS_CUERPO_BLANDO"] = "Insectos de cuerpo blando";
    TipoPlaga["HORMIGAS"] = "Hormigas";
    TipoPlaga["HONGOS_MILDIU"] = "Hongos mildiu y o\u00EDdio";
    TipoPlaga["ESCAMAS"] = "escamas";
    TipoPlaga["TRIPS"] = "trips";
    TipoPlaga["ROYA"] = "roya";
    TipoPlaga["MANCHA_NEGRA"] = "Mancha negra";
    TipoPlaga["ORUGAS"] = "Orugas";
    TipoPlaga["GUSANOS"] = "Gusanos";
})(TipoPlaga || (exports.TipoPlaga = TipoPlaga = {}));
var ComposicionControlPlaga;
(function (ComposicionControlPlaga) {
    ComposicionControlPlaga["ACEITE_NEEM"] = "Aceite de neem(azadiractina)";
    ComposicionControlPlaga["JABON_POTASICO"] = "Jab\u00F3n pot\u00E1sico";
    ComposicionControlPlaga["INSECTICIDA_PIRETRINA"] = "Insecticida a base de piretrina";
    ComposicionControlPlaga["TIERRA_DIATOMEAS"] = "Tierra de diatomeas";
    ComposicionControlPlaga["FUNGICIDA_AZUFRE"] = "Fungicida de azufre";
    ComposicionControlPlaga["ACEITE_HORTICULTURA"] = "Aceite de horticultura";
    ComposicionControlPlaga["INSECTICIDA_SITEMICO"] = "Insecticida sist\u00E9mico";
    ComposicionControlPlaga["TRAMPAS_ADHESIVAS_AMARILLAS"] = "Trampas adhesivas amarillas";
    ComposicionControlPlaga["FUNFICIDA_COBRE"] = "Fungicida de cobre";
    ComposicionControlPlaga["INSECTICIDA_BILOFICA_BACILUS_THUEINGIENSIS"] = "Insecticida biol\u00F3gico con Bacillus thuringiensis";
})(ComposicionControlPlaga || (exports.ComposicionControlPlaga = ComposicionControlPlaga = {}));
var MetodoAplicacion;
(function (MetodoAplicacion) {
    MetodoAplicacion["SPRAY_FOLIAR"] = "Spray foliar";
    MetodoAplicacion["ESPOLVOREADO_SUELO"] = "Espolvoreado en el suelo";
    MetodoAplicacion["APLICACION_SUELO"] = "aplicaci\u00F3n al suelo";
    MetodoAplicacion["RIEGO"] = "Riego";
    MetodoAplicacion["CERCA_PLANTAS_AFECTADAS"] = "Colocaci\u00F3n cerca de las plantas afectadas";
})(MetodoAplicacion || (exports.MetodoAplicacion = MetodoAplicacion = {}));
var Eficacia;
(function (Eficacia) {
    Eficacia["ALTA"] = "Alta";
    Eficacia["MEDIA"] = "Media";
})(Eficacia || (exports.Eficacia = Eficacia = {}));
//# sourceMappingURL=enum-control-plagas.js.map