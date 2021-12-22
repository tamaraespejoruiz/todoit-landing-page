import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from "./material.module";
import { PagesModule } from './pages/pages.module';

import { HomeService } from './pages/services/home.service';
import { SignUpService } from './pages/services/sign-up.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    HttpClientModule, 
    MaterialModule,
    PagesModule,  
  ],
  providers: [SignUpService, HomeService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
