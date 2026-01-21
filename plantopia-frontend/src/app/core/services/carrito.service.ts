import { Injectable, signal, computed } from '@angular/core';
import { Producto } from '../models/producto.model';
import { Carrito, ItemCarrito } from '../models/carrito.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  // Signal para el estado del carrito
  private readonly itemsSignal = signal<ItemCarrito[]>([]);

  // Computed signals
  readonly items = this.itemsSignal.asReadonly();
  readonly cantidadItems = computed(() =>
    this.itemsSignal().reduce((total, item) => total + item.cantidad, 0)
  );
  readonly total = computed(() =>
    this.itemsSignal().reduce((total, item) => total + item.subtotal, 0)
  );

  constructor() {
    // Cargar carrito desde localStorage
    this.cargarCarritoDesdeStorage();
  }

  agregarProducto(producto: Producto, cantidad: number = 1): void {
    const items = this.itemsSignal();
    const itemExistente = items.find(item => item.producto.idProducto === producto.idProducto);

    if (itemExistente) {
      // Actualizar cantidad del item existente
      const itemsActualizados = items.map(item =>
        item.producto.idProducto === producto.idProducto
          ? {
              ...item,
              cantidad: item.cantidad + cantidad,
              subtotal: this.calcularSubtotal(producto, item.cantidad + cantidad)
            }
          : item
      );
      this.itemsSignal.set(itemsActualizados);
    } else {
      // Agregar nuevo item
      const nuevoItem: ItemCarrito = {
        producto,
        cantidad,
        subtotal: this.calcularSubtotal(producto, cantidad)
      };
      this.itemsSignal.set([...items, nuevoItem]);
    }

    this.guardarCarritoEnStorage();
  }

  eliminarProducto(idProducto: number): void {
    const items = this.itemsSignal().filter(item => item.producto.idProducto !== idProducto);
    this.itemsSignal.set(items);
    this.guardarCarritoEnStorage();
  }

  actualizarCantidad(idProducto: number, cantidad: number): void {
    if (cantidad <= 0) {
      this.eliminarProducto(idProducto);
      return;
    }

    const items = this.itemsSignal().map(item =>
      item.producto.idProducto === idProducto
        ? {
            ...item,
            cantidad,
            subtotal: this.calcularSubtotal(item.producto, cantidad)
          }
        : item
    );
    this.itemsSignal.set(items);
    this.guardarCarritoEnStorage();
  }

  vaciarCarrito(): void {
    this.itemsSignal.set([]);
    this.guardarCarritoEnStorage();
  }

  obtenerCarrito(): Carrito {
    return {
      items: this.itemsSignal(),
      total: this.total(),
      cantidadItems: this.cantidadItems()
    };
  }

  private calcularSubtotal(producto: Producto, cantidad: number): number {
    const precio = producto.descuento > 0
      ? producto.precioNormal * (1 - producto.descuento / 100)
      : producto.precioNormal;
    return precio * cantidad;
  }

  private guardarCarritoEnStorage(): void {
    localStorage.setItem('carrito', JSON.stringify(this.itemsSignal()));
  }

  private cargarCarritoDesdeStorage(): void {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      try {
        const items = JSON.parse(carritoGuardado);
        this.itemsSignal.set(items);
      } catch (error) {
        console.error('Error al cargar el carrito:', error);
      }
    }
  }
}
