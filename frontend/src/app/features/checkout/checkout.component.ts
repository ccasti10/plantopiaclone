import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../core/services/carrito.service';
import { DireccionEnvio, MetodoPago } from '../../core/models/carrito.model';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  readonly carritoService = inject(CarritoService);
  private readonly router = inject(Router);

  readonly metodosPago = Object.values(MetodoPago);

  direccionEnvio = signal<DireccionEnvio>({
    nombreDestinatario: '',
    direccion: '',
    ciudad: '',
    region: '',
    codigoPostal: '',
    telefono: ''
  });

  metodoPagoSeleccionado = signal<MetodoPago>(MetodoPago.TARJETA_CREDITO);
  procesando = signal(false);

  ngOnInit(): void {
    if (this.carritoService.items().length === 0) {
      this.router.navigate(['/carrito']);
    }
  }

  procesarPago(): void {
    if (this.validarFormulario()) {
      this.procesando.set(true);

      // Simular procesamiento de pago
      setTimeout(() => {
        this.procesando.set(false);
        alert('¡Pedido realizado con éxito!');
        this.carritoService.vaciarCarrito();
        this.router.navigate(['/']);
      }, 2000);
    }
  }

  validarFormulario(): boolean {
    const direccion = this.direccionEnvio();

    if (!direccion.nombreDestinatario || !direccion.direccion ||
        !direccion.ciudad || !direccion.region ||
        !direccion.codigoPostal || !direccion.telefono) {
      alert('Por favor completa todos los campos de envío');
      return false;
    }

    return true;
  }

  actualizarDireccion(campo: keyof DireccionEnvio, valor: string): void {
    this.direccionEnvio.update(dir => ({ ...dir, [campo]: valor }));
  }
}
