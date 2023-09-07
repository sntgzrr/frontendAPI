import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.css']
})
export class FormProductsComponent implements OnInit{

  producto:Producto = new Producto();
  titulo:string="Registro de producto";
  idDuplicada = false;

  constructor(private productoService:ProductoService, private router:Router,private activatedRoute:ActivatedRoute){}

  ngOnInit():void{
   
  }
  create():void{
    console.log(this.producto);
    this.productoService.create(this.producto).subscribe(
      res=>this.router.navigate(['/products'])
    );
  }
}
