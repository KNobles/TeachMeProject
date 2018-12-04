import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CreateUserComponent} from './user/create-user/create-user.component';
import {ProfileComponent} from './profil/profile.component';
import {HomeComponent} from "./home/home.component";
import {CreateAnnouncementComponent} from "./create-announcement/create-announcement.component";

const routes: Routes = [
  {
    path : "Login" , component : LoginComponent
  },
  {
    path : "Signup" , component : CreateUserComponent
  },
  {
    path: "Profile", component: ProfileComponent
  },
  {
    path: "Home", component: HomeComponent
  },
  {
    path : "announcement", component : CreateAnnouncementComponent
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
