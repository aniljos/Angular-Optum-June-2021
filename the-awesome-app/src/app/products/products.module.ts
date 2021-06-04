import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule } from '@angular/forms';
import { ProdFilterPipe } from './prod-filter.pipe';
import { AuthGuardService } from '../guards/auth-guard.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';



const routes: Routes = [
  {path: "products", component: ListProductsComponent, canActivate: [AuthGuardService]},
  {path: "products/:id", component: ProductDetailComponent,canActivate: [AuthGuardService]},
]

@NgModule({
  declarations: [
    ListProductsComponent,
    EditProductComponent,
    ProdFilterPipe,
    ProductDetailComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule
  ]
})
export class ProductsModule { }
