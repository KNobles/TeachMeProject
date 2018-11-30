import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { TestComponentComponent } from './test-component/test-component.component';
import {AppRoutingModule} from './app-routing.module';

import {CreateTutorComponent} from './user/create-tutor/create-tutor.component';
import {CreatePersonneComponent} from './user/create-personne/create-personne.component';
import {CreateUserComponent} from "./user/create-user/create-user.component";
<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http';
import { ProfilComponent } from './profil/profil.component';
=======
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateAnnouncementComponent } from './create-announcement/create-announcement.component';
import {ListAnnouncementComponent} from "./list-announcement/list-announcement.component";
>>>>>>> 96d82f2e25698a1f5fa1bf1624e3a5e246113cea


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponentComponent,
    CreateUserComponent,
    CreatePersonneComponent,
    CreateTutorComponent,
<<<<<<< HEAD
    ProfilComponent
=======
    HomeComponent,
    CreateAnnouncementComponent,
    ListAnnouncementComponent
>>>>>>> 96d82f2e25698a1f5fa1bf1624e3a5e246113cea
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
