import { Component, OnInit } from '@angular/core';
import { FoodMenuService } from '../service/foodMenu.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  orderCount: number = 0;
  totalPrice: number = 0;
  noOfItemsMsg: string = "";
  totalPayable: number = 0;

  constructor(private foodService: FoodMenuService,
    public ngxSmartModalService: NgxSmartModalService,
    private route: Router) { }

  ngOnInit() {
    if (!this.foodService.isUserLoggedIn()) {
      this.route.navigate(['/login']);
    } else {
      this.foodService.dataSource.forEach(item => {
        if (item.quantity >= 1) {
          this.orderCount = this.orderCount + item.quantity;
          this.totalPrice = this.totalPrice + (item.price * item.quantity);
        }
      });
      this.noOfItemsMsg = "Price (" + this.orderCount + " items)";
      this.totalPayable = this.totalPrice - this.foodService.discount;
    }

  }

}
