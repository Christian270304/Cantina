import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiUrl = environment.apiUrl; 
  private carritoSubject = new BehaviorSubject<any[]>([]);
  private abiertoSubject = new BehaviorSubject<boolean>(false);
  carrito$ = this.carritoSubject.asObservable();
  abierto$ = this.abiertoSubject.asObservable();

  constructor(private http: HttpClient) { }

  getCarrito() {
  this.http.get<any>(`${this.apiUrl}/getCart`, { withCredentials: true }).subscribe(
    (response) => {
      const items = (response.data[0] || []).map((item: any) => ({
        ...item.producte,
        unitats: item.quantity 
      }));
      this.carritoSubject.next(items);
    }
  );
  return this.carritoSubject.value;
}

  abrirCarrito() {
    this.abiertoSubject.next(true);
  }
  cerrarCarrito() {
    this.abiertoSubject.next(false);
  }

  updateCarrito(carrito: any[]) {
    console.log('Actualizando carrito:', carrito);
    this.carritoSubject.next([...carrito]);
  }

  addProducte(producte: any) {
    this.http.post(`${this.apiUrl}/addToCart`, producte, {withCredentials: true}).subscribe(
      (response) => {
        console.log('Producto añadido al carrito:', response);
      } 
    );
  }
}
