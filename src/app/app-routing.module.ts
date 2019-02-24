import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademicsComponent } from './academics/academics.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'academics', component: AcademicsComponent
  },
  {
    path: 'facilities',  component : FacilitiesComponent
  },
  {
    path: 'contact',  component : ContactComponent
  },
  {
    path: 'login',  component : LoginComponent
  },
  {
    path: 'register',  component : RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }