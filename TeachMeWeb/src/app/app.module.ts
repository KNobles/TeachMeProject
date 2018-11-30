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
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
=======
import {HttpClientModule} from "@angular/common/http";
import { CreateAnnouncementComponent } from './create-announcement/create-announcement.component';
>>>>>>> fcff10bf8c0442a51da84be4bed9e1bf5ebcf225


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponentComponent,
    CreateUserComponent,
    CreatePersonneComponent,
    CreateTutorComponent,
<<<<<<< HEAD
    HomeComponent
=======
    CreateAnnouncementComponent
>>>>>>> fcff10bf8c0442a51da84be4bed9e1bf5ebcf225
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
