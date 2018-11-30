import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CreateUserComponent} from './user/create-user/create-user.component';
<<<<<<< HEAD
import {ProfilComponent} from './profil/profil.component';
=======
import {HomeComponent} from "./home/home.component";
import {CreateAnnouncementComponent} from "./create-announcement/create-announcement.component";
>>>>>>> 96d82f2e25698a1f5fa1bf1624e3a5e246113cea


const routes: Routes = [
  {
    path : "Login" , component : LoginComponent
  },
  {
    path : "Creation" , component : CreateUserComponent
  },
  {
<<<<<<< HEAD
    path : "Profil" , component :ProfilComponent
=======
    path: "Home", component: HomeComponent
  },
  {
    path : "announcement", component : CreateAnnouncementComponent
>>>>>>> 96d82f2e25698a1f5fa1bf1624e3a5e246113cea
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
