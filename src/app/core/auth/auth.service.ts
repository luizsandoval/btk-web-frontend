import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { ManageUsersService } from 'src/app/shared/services/manage-users.service';

const API = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private _http: HttpClient,
    private _manageUsersService: ManageUsersService
  ) {}

  authenticate = (username: string, password: string) => {
    return this._http
      .post(`${API}/login`, { username, password }, { observe: 'response' })
      .pipe(
        tap(res => {
          const authToken = res.headers.get('x-access-token');
          this._manageUsersService.setToken(authToken);
        })
      );
  }
}
