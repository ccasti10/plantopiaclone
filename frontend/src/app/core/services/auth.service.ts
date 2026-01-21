import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Usuario, LoginUsuario, RegistroUsuario, AuthResponse } from '../models/usuario.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/usuarios`;

  // Signal para el usuario actual
  private readonly usuarioActualSignal = signal<Usuario | null>(null);
  readonly usuarioActual = this.usuarioActualSignal.asReadonly();

  constructor() {
    // Cargar usuario desde localStorage
    this.cargarUsuarioDesdeStorage();
  }

  login(credenciales: LoginUsuario): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credenciales)
      .pipe(
        tap(response => {
          this.guardarSesion(response);
        })
      );
  }

  registro(datos: RegistroUsuario): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/registro`, datos)
      .pipe(
        tap(response => {
          this.guardarSesion(response);
        })
      );
  }

  logout(): void {
    this.usuarioActualSignal.set(null);
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  }

  estaAutenticado(): boolean {
    return !!localStorage.getItem('token');
  }

  obtenerToken(): string | null {
    return localStorage.getItem('token');
  }

  private guardarSesion(response: AuthResponse): void {
    localStorage.setItem('token', response.token);
    localStorage.setItem('usuario', JSON.stringify(response.usuario));
    this.usuarioActualSignal.set(response.usuario);
  }

  private cargarUsuarioDesdeStorage(): void {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      try {
        const usuario = JSON.parse(usuarioGuardado);
        this.usuarioActualSignal.set(usuario);
      } catch (error) {
        console.error('Error al cargar el usuario:', error);
      }
    }
  }
}
