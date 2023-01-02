import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { NewformComponent } from './newform/newform.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path : 'home',
    component: ProductlistComponent
  },
  {
    path: 'cart',
    component : ShoppingcartComponent
  },
  {
    path: 'signup',
    component : SignupComponent
  },
  {
    path: 'newform',
    component : NewformComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
