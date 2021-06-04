import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/UserService';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 // providers: []
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.loginFormGroup = new FormGroup({
        name: new FormControl("abc", [Validators.required], []),
        password: new FormControl("abc@123", [Validators.required], []),
    });
  }

  login(){
      
    //debugger;
    if(this.loginFormGroup.valid){
        const name = this.loginFormGroup.controls["name"].value;
        const password = this.loginFormGroup.controls["password"].value;

       this.userService.ValidateUser(name, password)
                                  .then(() => {

                                    //alert("Loggin in")
                                    this.router.navigate(["/products"]);

                                  }, () => {
                                    alert("Failed to login");
                                  })
    }
    else{
      alert("Invalid form");  
    }
  }

}
