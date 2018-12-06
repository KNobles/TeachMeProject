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
import {ListAnnouncementComponent} from "./list-announcement/list-announcement.component";
import {CreateAnnouncementComponent} from "./create-announcement/create-announcement.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profil/profile.component";
<<<<<<< HEAD
import {HttpClientModule} from "@angular/common/http";
import { NavbarheaderComponent } from './navbarheader/navbarheader.component';
import { FilterAnnouncementPipe } from './filter-announcement.pipe';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
=======
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { FilterByPriceAnnouncementPipe } from './filter-by-price-announcement.pipe';
import { NavbarheaderComponent } from './navbarheader/navbarheader.component';
import { FilterByCourseAnnouncementPipe } from './filter-by-course-announcement.pipe';
import {TokenInterceptor} from "./token-interceptor";

>>>>>>> d9db4b09b090324eeea3e8d6d399a1d22258d286


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponentComponent,
    CreateUserComponent,
    CreatePersonneComponent,
    CreateTutorComponent,
    ProfileComponent,
    HomeComponent,
    CreateAnnouncementComponent,
    ListAnnouncementComponent,
    NavbarheaderComponent,
    FilterAnnouncementPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
