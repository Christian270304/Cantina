import { Component } from '@angular/core';
import { ProducteService } from '../../core/service/producte.service';
import { CommonModule, ViewportScroller } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CarritoService } from '../../core/service/carrito.service';


@Component({
  selector: 'app-productes',
  imports: [CommonModule, RouterModule],
  templateUrl: './productes.component.html',
  styleUrl: './productes.component.scss'
})

export class ProductesComponent {
  productes: any[] = [];
  carrito: { id: number, nom: string; preu: number; unitats: number }[] = [];
  carritoAbierto = false;

  constructor(
    private producteService: ProducteService, 
    private route: ActivatedRoute, 
    private viewportScroller: ViewportScroller,
    private carritoService: CarritoService
  ) {
    this.carritoService.carrito$.subscribe((carrito) => {
      this.carrito = carrito;
    });
    this.carritoService.abierto$.subscribe((abierto) => {
      this.carritoAbierto = abierto;
    });
  }

  ngOnInit() {
    this.cargarProductes();
    this.cargarCarrito();
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment);
        }, 0);
      }
    })
  }

  cargarProductes(): void {
    this.producteService.getProductes().subscribe(
      (productes: any) => {
        this.productes = productes.data;
      },
      (error) => {
        console.error('Error al carregar els productes:', error);
      }
    );
  }

  cargarCarrito(): void {
    this.carrito = this.carritoService.getCarrito();
  }

  agregarAlCarrito(producte: { id:number, nom: string; preu: number; unitats: number }): void {
    const index = this.carrito.findIndex(p => p.nom === producte.nom);

    if (index !== -1) {
      this.carrito[index].unitats += 1;
      this.carritoService.updateCarrito(this.carrito); 
    } else {
      const nuevoProducto = { ...producte, unitats: 1 };
      this.carrito.push(nuevoProducto);
      this.carritoService.addProducte(nuevoProducto);
      this.carritoService.updateCarrito(this.carrito);
    }

    this.carritoAbierto = true;
  }

  closeCart(): void {
    this.carritoAbierto = false;
  }
  abrirCarrito(): void {
    this.carritoAbierto = true;
  }
  getTotal(): number {
    return this.carrito.reduce((acc, item) => acc + item.preu * item.unitats, 0);
  }

  restarUnidad(item: any) {
    if (item.unitats > 1) {
      item.unitats--;
      this.carritoService.updateCarrito(this.carrito);
    }
  }

  sumarUnidad(item: any) {
    item.unitats++;
    this.carritoService.updateCarrito(this.carrito);
  }

  eliminarItem(item: any) {
    this.carrito = this.carrito.filter(p => p.id !== item.id);
    this.carritoService.updateCarrito(this.carrito);
  }

}
