import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';


@NgModule({
  imports: [RouterModule.forRoot([
    { path : '', pathMatch : 'full', redirectTo : '/products' },
    { path : 'products', component : ProductComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
