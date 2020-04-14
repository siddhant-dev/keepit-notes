import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccessService } from 'src/app/services/access.service';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [ Validators.email, Validators.required]],
    password: ['', Validators.required]
  });
  successMessage: string;
  constructor(private fb: FormBuilder,
              private route: Router,
              private access: AccessService,
              private toast: NbToastrService) { }

  ngOnInit() {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  signUp() {
    this.route.navigateByUrl('signUp');
  }

login() {
  const user = {
    email: this.email.value,
    password: this.password.value
  };
  this.access.login(user).then(() => {
    this.showToast('', 'success', 'Logged In');
    this.route.navigateByUrl('');
  }).catch(err => {
    if (err.code === 'auth/wrong-password') {
      this.showToast(err.message, 'danger', 'Wrong Password');
    } else if (err.code === 'auth/user-not-found') {
      this.showToast(err.message, 'danger', 'No Account Found');
    } else {
      this.showToast(err.message, 'danger', 'Server Error');
    }
  });

}

  forgot() {
    if (!this.email.value) {
      this.showToast('Please enter the email address', 'danger', 'Email Address Empty');
    } else {
      const d = this.access.forgetPassword(this.email.value).then(() => {
        this.showToast(`An Email has been sent to ${this.email.value}`, 'success', 'Email Sent');
      }).catch(err => {
        if (err === 'auth/invalid-email') {
          this.showToast(`Invalid email Address. Please try again`, 'danger', 'Invalid Email');
        } else {
          this.showToast('Some error occoured, please try again after some time', 'danger', 'Server Error');
        }
      });
    }
  }

  showToast(message, status: NbComponentStatus, title){

    this.toast.show(message, title, {status, duration: 3000, preventDuplicates: true});
  }

}
