import { Producto } from './producto.model';

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
  subtotal: number;
}

export interface Carrito {
  items: ItemCarrito[];
  total: number;
  cantidadItems: number;
}

export interface OrdenCompra {
  idOrden?: number;
  idUsuario: number;
  items: DetalleOrdenCompra[];
  total: number;
  estado: EstadoOrden;
  fechaCreacion?: Date;
  direccionEnvio: DireccionEnvio;
  metodoPago: MetodoPago;
}

export interface DetalleOrdenCompra {
  idProducto: number;
  nombreProducto: string;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}

export enum EstadoOrden {
  PENDIENTE = 'PENDIENTE',
  PROCESANDO = 'PROCESANDO',
  ENVIADO = 'ENVIADO',
  ENTREGADO = 'ENTREGADO',
  CANCELADO = 'CANCELADO'
}

export interface DireccionEnvio {
  direccion: string;
  ciudad: string;
  region: string;
  codigoPostal: string;
  telefono: string;
  nombreDestinatario: string;
}

export enum MetodoPago {
  TARJETA_CREDITO = 'TARJETA_CREDITO',
  TARJETA_DEBITO = 'TARJETA_DEBITO',
  TRANSFERENCIA = 'TRANSFERENCIA',
  EFECTIVO = 'EFECTIVO'
}
