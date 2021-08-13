import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FoodMenuService } from '../service/foodMenu.service';
import { User } from '../modals/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  submitted: boolean = false;
  duplicateUser: boolean = false;
  user: User;  

  constructor(private fb: FormBuilder,
    private foodService: FoodMenuService,
    private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register(){
    this.submitted = true;
    this.user = this.signUpForm.value;
    this.foodService.registerUser(this.user).subscribe(response=> {
      if(response['message'] === 'SUCCESS'){
        this.router.navigate(['/login']);
      }
      else if(response['message'] === 'DUPLICATE_USER'){
        this.duplicateUser = true;
      }
    });
  }

}
