import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing.module';
import { HomeModule } from './home/home.module';
import { MainNavModule } from '../core/main-nav/main-nav.module';
import { FooterModule } from '../core/footer/footer.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MainNavModule,
    FooterModule,

    HomeModule
  ]
})

export class PagesModule { }
