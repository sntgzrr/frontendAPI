import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css'],
})
export class FormUpdateComponent implements OnInit{
  producto:Producto = new Producto(); 
  titulo:string="Actualización del producto";

  constructor(private productoService:ProductoService, private router:Router,private activatedRoute:ActivatedRoute){}

  ngOnInit():void{
    this.cargar();
  }
  cargar(): void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e["id"];
        if(id){
          this.productoService.get(id).subscribe(
            es=>this.producto=es
          );
        }
      }
    );
  }
  update():void{
    this.productoService.update(this.producto).subscribe(
      res=>this.router.navigate(['/products'])
    );
  }

}
