import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './databinding/databinding.component';
import {HelloComponent} from './hello/hello.component'
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsModule } from './products/products.module';


// http://localhost:4200/databinding
// http://localhost:4200/sampleapp/databinding

const routes: Routes = [
  {path: "home", component: HelloComponent},
  {path: "databinding", component: DataBindingComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ProductsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
