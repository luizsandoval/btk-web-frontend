import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ManageUsersService } from 'src/app/shared/services/manage-users.service';

@Component({
  selector: 'btk-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  mobileQuery: MediaQueryList;

  constructor(
    private _manageUsersService: ManageUsersService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  logout = (): void => {
    this._manageUsersService.logout();
    this._router.navigate(['auth/login']);
  }
}
