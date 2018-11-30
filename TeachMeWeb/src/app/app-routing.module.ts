import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CreateUserComponent} from './user/create-user/create-user.component';
import {ProfilComponent} from './profil/profil.component';


const routes: Routes = [
  {
    path : "Login" , component : LoginComponent
  },
  {
    path : "Creation" , component : CreateUserComponent
  },
  {
    path : "Profil" , component :ProfilComponent
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
