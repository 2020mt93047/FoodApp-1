import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodMenuService } from '../service/foodMenu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidCred: boolean = false;

  constructor(private fb: FormBuilder,
    private route: Router,
    private foodService: FoodMenuService) { }

  ngOnInit() {
    if(!this.foodService.isUserLoggedIn()){
      this.buildForm();
    }else{
      this.route.navigate(['/restaurants']);
    }    
  }

  buildForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(Validators.required),
      password: new FormControl(Validators.required),
   });
    // this.loginForm = this.fb.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }

  login() {
    this.submitted = true;
    if (this.loginForm.controls['username'].value !== "" && this.loginForm.controls['password'].value !== "") {
      this.foodService.validateUser(this.loginForm.value).subscribe(response => {
        if (response['message'] === 'USER_NOT_FOUND') {
          this.invalidCred = true;
        } else {
          sessionStorage.setItem("username", this.loginForm.controls['username'].value);
          sessionStorage.setItem("password", this.loginForm.controls['password'].value);
          this.route.navigate(['/restaurants']);
        }
      });
    }
  }

}
