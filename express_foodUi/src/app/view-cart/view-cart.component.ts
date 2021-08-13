import { Component, OnInit } from '@angular/core';
import { FoodMenuService } from '../service/foodMenu.service';
import { FoodItem } from '../modals/foodItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {

  selectedFoodItems: FoodItem[] = [];
  apCouponClicked: boolean = false;

  constructor(private foodServ: FoodMenuService,
              private route: Router) { }

  ngOnInit() {
    if(!this.foodServ.isUserLoggedIn()){
      this.route.navigate(['/login']);
    }else{
    this.foodServ.discount = 0;
    this.foodServ.dataSource.forEach(item=>{
      if(item.quantity >= 1){
        this.selectedFoodItems.push(item);
      }
    });
  }
  }

  onClickMinus(foodItem){
    this.foodServ.dataSource.forEach(item=>{
      if(item.id === foodItem.id){
        item.quantity = item.quantity-1;
      }
      if(item.quantity === 0){
        this.selectedFoodItems.splice(this.selectedFoodItems.indexOf(item), 1);
      }
    });
  }

  onClickPlus(foodItem){
    this.foodServ.dataSource.forEach(item=>{
      if(item.id === foodItem.id){
        item.quantity = item.quantity+1;
      }
    });
  }

  onCouponBtn(){
    this.foodServ.discount = 70;
    this.apCouponClicked = true;
  }

  onOfferSelect(discount){
    this.foodServ.discount = discount;
  }

}
