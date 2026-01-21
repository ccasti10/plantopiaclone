import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../core/services/producto.service';
import { CarritoService } from '../../core/services/carrito.service';
import { Producto, TipoProductos } from '../../core/models/producto.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  private readonly productoService = inject(ProductoService);
  private readonly carritoService = inject(CarritoService);
  private readonly route = inject(ActivatedRoute);

  productos = signal<Producto[]>([]);
  productosFiltrados = signal<Producto[]>([]);
  categoriaSeleccionada = signal<TipoProductos | null>(null);
  cargando = signal(false);
  error = signal<string | null>(null);

  readonly categorias = Object.values(TipoProductos);

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['categoria']) {
        this.categoriaSeleccionada.set(params['categoria']);
      }
      this.cargarProductos();
    });
  }

  cargarProductos(): void {
    this.cargando.set(true);
    this.productoService.obtenerTodosLosProductos().subscribe({
      next: (productos) => {
        this.productos.set(productos);
        this.aplicarFiltros();
        this.cargando.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar productos');
        this.cargando.set(false);
        console.error(err);
      }
    });
  }

  filtrarPorCategoria(categoria: TipoProductos | null): void {
    this.categoriaSeleccionada.set(categoria);
    this.aplicarFiltros();
  }

  aplicarFiltros(): void {
    let productosFiltrados = this.productos();

    if (this.categoriaSeleccionada()) {
      productosFiltrados = productosFiltrados.filter(
        p => p.categoria === this.categoriaSeleccionada()
      );
    }

    this.productosFiltrados.set(productosFiltrados);
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
