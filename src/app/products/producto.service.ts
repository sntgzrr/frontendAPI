import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private url:string="/products";


  constructor(private http:HttpClient) { }


  //Get lista de Productos.
  getAll():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }

  //Post producto.
  create(producto:Producto): Observable<Producto>{
    return this.http.post<Producto>(this.url, producto);
  }

  //Get por ID.
  get(id:number):Observable<Producto>{
    return this.http.get<Producto>(this.url+"/"+id);
  }

  //Update Producto.
  update(producto:Producto):Observable<Producto>{
    return this.http.put<Producto>(this.url, producto);
  }

  //Get por ID.
  delete(id:number | undefined):Observable<Producto>{
    return this.http.delete<Producto>(this.url+"/"+id);
  }
  
}
