import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { SignupComponent } from './access/signup/signup.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
