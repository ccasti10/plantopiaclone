export enum TipoProductos {
  PLANTA = 'PLANTA',
  FERTILIZANTE = 'FERTILIZANTE',
  SUSTRATO = 'SUSTRATO',
  CONTROL_PLAGAS = 'CONTROL_PLAGAS',
  MACETERO = 'MACETERO',
  EQUIPO = 'EQUIPO'
}

export interface Producto {
  idProducto: number;
  nombreProducto: string;
  imagenProducto: string[];
  descuento: number;
  precioNormal: number;
  coberturaDeDespacho: string[];
  stock: number;
  descripcionProducto: string;
  categoria: TipoProductos;
  valoracion: number;
  cantidadVentas: number;
  codigoProducto: string;
}

export interface Planta extends Producto {
  habitat: string;
  luz: string;
  frecuenciaDeRiego: string;
  humedadIdeal: string;
  temperaturaIdeal: number;
  toxicidadMascotas: boolean;
  tamanoMaximo: number;
  tipoSuelo: string;
  dificultadDeCuidado: string;
  estacion: string;
  fertilizantesSugeridos: number[];
  sustratosSugeridos: number[];
}

export interface Fertilizante extends Producto {
  tipoFertilizante: string;
  composicion: string;
  aplicacion: string;
  frecuenciaAplicacion: string;
}

export interface Sustrato extends Producto {
  composicion: string;
  ph: number;
  retencionHumedad: string;
}

export interface ControlPlagas extends Producto {
  tipoPlaga: string;
  aplicacion: string;
  toxicidad: string;
}

export interface Macetero extends Producto {
  material: string;
  dimensiones: string;
  capacidad: number;
  color: string;
}
