import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../core/services/producto.service';
import { CarritoService } from '../../core/services/carrito.service';
import { Producto } from '../../core/models/producto.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private readonly productoService = inject(ProductoService);
  private readonly carritoService = inject(CarritoService);

  productosDestacados = signal<Producto[]>([]);
  productosEnOferta = signal<Producto[]>([]);
  cargando = signal(false);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.cargarProductosDestacados();
    this.cargarProductosEnOferta();
  }

  cargarProductosDestacados(): void {
    this.cargando.set(true);
    this.productoService.obtenerProductosDestacados().subscribe({
      next: (productos) => {
        this.productosDestacados.set(productos.slice(0, 8));
        this.cargando.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar productos destacados');
        this.cargando.set(false);
        console.error(err);
      }
    });
  }

  cargarProductosEnOferta(): void {
    this.productoService.obtenerProductosEnOferta().subscribe({
      next: (productos) => {
        this.productosEnOferta.set(productos.slice(0, 4));
      },
      error: (err) => {
        console.error('Error al cargar ofertas:', err);
      }
    });
  }

  calcularPrecioConDescuento(producto: Producto): number {
    return this.productoService.calcularPrecioConDescuento(producto);
  }

  agregarAlCarrito(producto: Producto, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.carritoService.agregarProducto(producto, 1);
  }
}
