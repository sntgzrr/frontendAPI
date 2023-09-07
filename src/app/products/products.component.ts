import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  titulo: string ="Lista De Productos";

  productos:Producto[] | undefined;
  idExists:boolean | undefined;
  constructor(private productoService: ProductoService){}

  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      p => this.productos=p
    );
  }

  delete(producto:Producto):void{
    this.productoService.delete(producto.id).subscribe(
      res=>this.productoService.getAll().subscribe(
        response=>this.productos=response
      )
    )
  }

}
