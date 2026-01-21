import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../core/services/producto.service';
import { CarritoService } from '../../core/services/carrito.service';
import { Producto } from '../../core/models/producto.model';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  private readonly productoService = inject(ProductoService);
  private readonly carritoService = inject(CarritoService);
  private readonly route = inject(ActivatedRoute);

  producto = signal<Producto | null>(null);
  imagenSeleccionada = signal(0);
  cantidad = signal(1);
  cargando = signal(false);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.cargarProducto(id);
    });
  }

  cargarProducto(id: number): void {
    this.cargando.set(true);
    this.productoService.obtenerProductoPorId(id).subscribe({
      next: (producto) => {
        this.producto.set(producto);
        this.cargando.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar el producto');
        this.cargando.set(false);
        console.error(err);
      }
    });
  }

  seleccionarImagen(index: number): void {
    this.imagenSeleccionada.set(index);
  }

  incrementarCantidad(): void {
    const producto = this.producto();
    if (producto && this.cantidad() < producto.stock) {
      this.cantidad.update(c => c + 1);
    }
  }

  decrementarCantidad(): void {
    if (this.cantidad() > 1) {
      this.cantidad.update(c => c - 1);
    }
  }

  calcularPrecioConDescuento(producto: Producto): number {
    return this.productoService.calcularPrecioConDescuento(producto);
  }

  agregarAlCarrito(): void {
    const producto = this.producto();
    if (producto) {
      this.carritoService.agregarProducto(producto, this.cantidad());
    }
  }
}
