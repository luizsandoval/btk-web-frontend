import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { User } from 'src/app/shared/models/user';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'btk-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../auth.component.scss', './register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;

  user = {} as User;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm = (): void => {
    this.registerForm = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  };

  register = () => {
    this.user.firstName = this.registerForm.get('firstname').value;
    this.user.lastName = this.registerForm.get('lastname').value;
    this.user.email = this.registerForm.get('email').value;
    this.user.username = this.registerForm.get('username').value;
    this.user.password = this.registerForm.get('password').value;

    this._authService.register(this.user).subscribe(
      () => {
        this._snackbar.open('Success! You were registered', 'OK', {
          duration: 5000,
          panelClass: 'success-snackbar',
          horizontalPosition: 'start'
        });
        this._router.navigate(['/auth/login']);
      },
      err => {
        console.log(err);
      }
    );
  };
}
