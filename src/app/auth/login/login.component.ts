import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../core/auth/auth.service';

@Component({
  selector: 'btk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../auth.component.scss', './login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm = (): void => {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  };

  login = () => {
    this._authService
      .authenticate(
        this.loginForm.get('username').value,
        this.loginForm.get('password').value
      )
      .subscribe(
        () => {
          this._router.navigate(['/home']);
        },
        err => {
          console.log(err);
          this.loginForm.reset();
        }
      );
  };

  navigateToRegister = () => {
    this._router.navigate(['/auth/register']);
  }
}
