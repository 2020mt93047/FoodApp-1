import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../modals/restaurant';
import { FoodMenuService } from '../service/foodMenu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  allRestaurants: Restaurant[];
  imageList: Map<string, string> = new Map<string, string>();

  constructor(private foodMenuServ: FoodMenuService,
    private route: Router) {
    this.imageList.set('RT001', '../../assets/khana-khazana.png');
    this.imageList.set('RT002', '../../assets/italian.png');
    this.imageList.set('RT003', '../../assets/burgerjoint.png');
  }

  ngOnInit() {
    if (!this.foodMenuServ.isUserLoggedIn()) {
      this.route.navigate(['/login']);
    } else {
      console.log(this.foodMenuServ.dataSource);
      this.foodMenuServ.dataSource = [];
      this.foodMenuServ.getAllRestaurants().subscribe((data) => {
        this.allRestaurants = data;
      });
    }
  }

  viewMenuOfRestaurant(restaurant: Restaurant) {
    this.foodMenuServ.dataSource = [];
    this.foodMenuServ.selectedRestaurant = restaurant;
    this.route.navigate(['/food-menu', restaurant.restaurantId]);
  }

}
