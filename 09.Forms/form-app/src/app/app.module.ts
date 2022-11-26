import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyRouterLinkDirective,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
  //for template drivven forms
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //for template drivven forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
