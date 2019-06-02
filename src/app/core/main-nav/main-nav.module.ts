import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule
} from '@angular/material';

import { MainNavComponent } from './main-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule
  ],
  declarations: [MainNavComponent],
  exports: [MainNavComponent]
})

export class MainNavModule {}
