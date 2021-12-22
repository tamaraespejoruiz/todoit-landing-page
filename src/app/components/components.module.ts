import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { FooterLandingComponent } from './footer-landing/footer-landing.component';

import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    HeaderLandingComponent,
    FooterLandingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MatButtonModule,
    MatInputModule
  ], 
  exports: [ // Lo exportamos para que se pueda utilizar en el otro modulo
    HeaderLandingComponent,
    FooterLandingComponent
  ]
})
export class ComponentsModule { }
