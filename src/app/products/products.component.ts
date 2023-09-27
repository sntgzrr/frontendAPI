import { Component, OnInit } from '@angular/core';
import { Producto } from './model/producto';
import { ProductoService } from '../services/producto.service';
import * as XLSX from "xlsx";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  titulo: string ="Lista De Productos";
  fileName="Products.xlsx";
  productos:Producto[] | undefined;
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

  exportexcel(): void{
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
    XLSX.writeFile(wb, this.fileName);
  }
}