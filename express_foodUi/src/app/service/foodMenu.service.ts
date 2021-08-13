import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodCategory } from '../modals/foodCategory';
import { FoodItem } from '../modals/foodItem';
import { environment } from '../../environments/environment';
import { User } from '../modals/user';

@Injectable({
  providedIn: 'root',
})
export class FoodMenuService {

  dataSource: FoodItem[];
  discount: number;
  user: User;
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllItems() {
    let username = sessionStorage.getItem("username");
    let password = sessionStorage.getItem("password");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<FoodCategory[]>(this.API_URL+'/getAllMenu', {headers});
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