import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './databinding/databinding.component';
import {HelloComponent} from './hello/hello.component'
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsModule } from './products/products.module';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/UserService';
import { UserServiceImpl } from './services/UserServiceImpl';
import { AuthGuardService } from './guards/auth-guard.service';


// http://localhost:4200/databinding
// http://localhost:4200/sampleapp/databinding

const routes: Routes = [
  {path: "home", component: HelloComponent},
  {path: "databinding", component: DataBindingComponent},
  {path: "search", component: SearchComponent},
  {path: "login", component: LoginComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, NotFoundComponent, SearchComponent, LoginComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    ProductsModule,
    RouterModule.forRoot(routes)
  ],
  // providers: [{provide: UserService, useClass: UserServiceImpl}, AuthGuardService],
  providers: [{provide: UserService, useClass: UserServiceImpl}],

  bootstrap: [AppComponent]
})
export class AppModule { }
