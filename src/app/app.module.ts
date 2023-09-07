import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FormProductsComponent } from './products/form-products.component';
import { FormUpdateComponent } from './products/form-update.component';

const routes:Routes=[
  {path:"",redirectTo:"/products",pathMatch:"full"},
  {path:"products", component:ProductsComponent},
  {path:"products/form", component:FormProductsComponent},
  {path:"products/form/:id", component:FormUpdateComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FormProductsComponent,
    FormUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
