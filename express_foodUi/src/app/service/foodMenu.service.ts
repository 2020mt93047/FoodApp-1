import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodCategory } from '../modals/foodCategory';
import { FoodItem } from '../modals/foodItem';
import { environment } from '../../environments/environment';
import { User } from '../modals/user';
import { Restaurant } from '../modals/restaurant';

@Injectable({
  providedIn: 'root',
})
export class FoodMenuService {

  selectedRestaurant: Restaurant;
  dataSource: FoodItem[];
  discount: number;
  user: User;
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllRestaurants() {
    let username = sessionStorage.getItem("username");
    let password = sessionStorage.getItem("password");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Restaurant[]>(this.API_URL+'/getAllRestaurants', {headers});
  }

  getAllItems(selectedRestaurantId: string) {
    let username = sessionStorage.getItem("username");
    let password = sessionStorage.getItem("password");
    let params = new HttpParams();
    params.append('restaurantId', selectedRestaurantId);
    const httpOptions = {
        headers: { Authorization: 'Basic ' + btoa(username + ':' + password) },
        params: {'restaurantId': selectedRestaurantId}
    };
    return this.http.get<FoodCategory[]>(this.API_URL+'/getAllMenu', httpOptions);
  }

  registerUser(user: User){
    return this.http.post(this.API_URL+'/register', user);
  }

  authenticate(user: User) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.username + ':' + user.password) });
    return this.http.get(this.API_URL+ '/validateLogin',{headers}).pipe(userData => {
        return userData;
       });
  }

  validateUser(user: User){
    return this.http.post(this.API_URL + '/validateLogin', user).pipe(response => {
      return response;
    });
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return (user !== null);
  }
}