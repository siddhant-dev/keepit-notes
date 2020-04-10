import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['',[ Validators.email, Validators.required]],
    password: ['', Validators.required]
  });
  errMessage: string;
  successMessage: string;
  constructor(private fb: FormBuilder,
              private route: Router,
              private access: AccessService) { }

  ngOnInit() {
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  signUp(){
    this.route.navigateByUrl('signUp');
  }

login(){
  const user = {
    email: this.email.value,
    password: this.password.value
  }

  this.access.login(user);
}

forgot(){
  if(!this.email.value){
    this.errMessage = 'Please enter the email address';
  } else{
    this.errMessage = null;
    const d = this.access.forgetPassword(this.email.value).then(() => {
      this.successMessage = `An Email has been sent to ${this.email.value}`;
    }).catch(err => {
      if(err === 'auth/invalid-email'){
        this.errMessage = 'Invalid email Address. Please try again';
      }
    });
  }
}

}
