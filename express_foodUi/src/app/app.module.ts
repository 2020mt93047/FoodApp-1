import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FoodMenuService } from './service/foodMenu.service';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FoodMenuComponent,
    ViewCartComponent,
    OrderSummaryComponent,
    RegisterComponent,
    LoginComponent,
    RestaurantsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [FoodMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
