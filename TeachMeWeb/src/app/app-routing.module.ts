import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CreateUserComponent} from './user/create-user/create-user.component';
<<<<<<< HEAD
import {HomeComponent} from "./home/home.component";
=======
import {CreateAnnouncementComponent} from "./create-announcement/create-announcement.component";
>>>>>>> fcff10bf8c0442a51da84be4bed9e1bf5ebcf225


const routes: Routes = [
  {
    path : "Login" , component : LoginComponent
  },
  {
    path : "Creation" , component : CreateUserComponent
  },
  {
<<<<<<< HEAD
    path : "Home" , component : HomeComponent
=======
    path : "announcement", component : CreateAnnouncementComponent
>>>>>>> fcff10bf8c0442a51da84be4bed9e1bf5ebcf225
  },
  {
    path : "" , redirectTo: "/Login" , pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
