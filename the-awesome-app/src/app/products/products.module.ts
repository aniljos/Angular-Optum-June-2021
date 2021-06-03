import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: "products", component: ListProductsComponent}
]

@NgModule({
  declarations: [
    ListProductsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
