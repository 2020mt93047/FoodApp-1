import { Component, OnInit } from '@angular/core';
import { FoodMenuService } from '../service/foodMenu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean = true;
  userLoggedIn: boolean = false;

  constructor(private foodServ: FoodMenuService,
              private route: Router) { }
  
  ngOnInit() {
    if(this.foodServ.isUserLoggedIn() === true){
      this.userLoggedIn = true;
    }else{
      this.userLoggedIn = false; 
    }
  }  

  logout(){
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    this.route.navigate(['/login']);
  }

}
