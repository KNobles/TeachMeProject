import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TestComponentComponent} from './test-component/test-component.component';

const routes: Routes = [
  {
    path : "Login" , component : LoginComponent
  },
  {
    path : "Creation" , component : TestComponentComponent
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
