import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../core/services/carrito.service';
import { ProductoService } from '../../core/services/producto.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  readonly carritoService = inject(CarritoService);
  private readonly productoService = inject(ProductoService);

  actualizarCantidad(idProducto: number, cantidad: number): void {
    this.carritoService.actualizarCantidad(idProducto, cantidad);
  }

  eliminarProducto(idProducto: number): void {
    this.carritoService.eliminarProducto(idProducto);
  }

  vaciarCarrito(): void {
    if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
      this.carritoService.vaciarCarrito();
    }
  }

  calcularPrecioUnitario(producto: any): number {
    return this.productoService.calcularPrecioConDescuento(producto);
  }
}
