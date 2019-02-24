import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [LoginComponent]
})
export class LoginModule {}
