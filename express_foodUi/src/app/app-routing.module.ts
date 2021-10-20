import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'food-menu/:id', component: FoodMenuComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'viewCart', component: ViewCartComponent},
  {path: 'orderSummary', component: OrderSummaryComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
