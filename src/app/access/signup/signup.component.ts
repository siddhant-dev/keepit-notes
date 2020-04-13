import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirmPassword.validator';
import { Router } from '@angular/router';
import { AccessService } from 'src/app/services/access.service';
import { User } from 'src/app/services/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private access: AccessService) { }

  get name() {
    return this.signupForm.get('name');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
  errMessage: string;

  signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
  }, {validator: ConfirmPasswordValidator.MatchPassword}
  );

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl('login');
  }

  createUser() {
    const user: User = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value
    };
    this.access.createAccount(user).then(() => {
      this.router.navigateByUrl('');
    }).catch(err => {
      this.errMessage = 'Some Error occured, please try again after some tine';
    });
  }

}
