import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto, TipoProductos } from '../models/producto.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/productos`;

  obtenerTodosLosProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  obtenerProductosPorCategoria(categoria: TipoProductos): Observable<Producto[]> {
    const params = new HttpParams().set('categoria', categoria);
    return this.http.get<Producto[]>(`${this.apiUrl}/categoria`, { params });
  }

  buscarProductos(termino: string): Observable<Producto[]> {
    const params = new HttpParams().set('q', termino);
    return this.http.get<Producto[]>(`${this.apiUrl}/buscar`, { params });
  }

  obtenerProductosDestacados(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/destacados`);
  }

  obtenerProductosMasVendidos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/mas-vendidos`);
  }

  obtenerProductosEnOferta(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/ofertas`);
  }

  calcularPrecioConDescuento(producto: Producto): number {
    if (producto.descuento > 0) {
      return producto.precioNormal * (1 - producto.descuento / 100);
    }
    return producto.precioNormal;
  }
}
