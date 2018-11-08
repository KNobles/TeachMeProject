import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { TestComponentComponent } from './test-component/test-component.component';
import {AppRoutingModule} from './app-routing.module';
import {CreateUserComponent} from './eleve/create-eleve/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponentComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
