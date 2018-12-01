import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CreateUserComponent} from './user/create-user/create-user.component';
import {ProfilComponent} from './profil/profil.component';
import {HomeComponent} from "./home/home.component";
import {CreateAnnouncementComponent} from "./create-announcement/create-announcement.component";

const routes: Routes = [
  {
    path : "Login" , component : LoginComponent
  },
  {
    path : "Creation" , component : CreateUserComponent
  },
  {
    path: "Profil", component: ProfilComponent
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
