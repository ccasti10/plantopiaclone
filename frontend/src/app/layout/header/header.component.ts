import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CarritoService } from '../../core/services/carrito.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly carritoService = inject(CarritoService);
  readonly authService = inject(AuthService);

  menuAbierto = false;
  busquedaAbierta = false;

  toggleMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  toggleBusqueda(): void {
    this.busquedaAbierta = !this.busquedaAbierta;
  }

  cerrarSesion(): void {
    this.authService.logout();
  }
}
