import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ManageUsersService } from 'src/app/shared/services/manage-users.service';

@Injectable({providedIn: 'root'})

export class LoginGuard implements CanActivate {

    constructor(private _manageUsersService: ManageUsersService, private _router: Router) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        if (this._manageUsersService.isLogged()) {
            this._router.navigate(['/home']);
            return false;
        }
        return true;
    }
}
