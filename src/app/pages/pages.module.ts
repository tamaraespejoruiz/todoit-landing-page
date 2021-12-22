import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ComponentsModule } from '../components/components.module';
// Con este último import relacionamos pagesmodule con componentsmodule
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';

//Para el boton y el router
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatInputModule,    
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule, 
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class PagesModule{ }
