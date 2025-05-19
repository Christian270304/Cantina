import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';
import { CarritoService } from '../../core/service/carrito.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
carritoLength = 0;
@Output() openCarrito: EventEmitter<boolean> = new EventEmitter<boolean>();

constructor(private authService: AuthService, private carritoService: CarritoService) {
  this.carritoService.carrito$.subscribe((carrito) => {
    this.carritoLength = carrito.length;
  });
} 

logout() {
  this.authService.logout();
}
  openCarritoModal() {
    this.carritoService.abrirCarrito();
  }
}
