import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { ManageUsersService } from 'src/app/shared/services/manage-users.service';

@Component({
  selector: 'btk-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _manageUsersService: ManageUsersService,
    private _router: Router
  ) {}

  logout = (): void => {
    this._manageUsersService.logout();
    this._router.navigate(['login']);
  }
}
