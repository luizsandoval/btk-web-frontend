import { Component, AfterViewInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel
} from '@angular/router';

@Component({
  selector: 'btk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  loading: boolean;

  constructor(private _router: Router) {
    this.loading = true;
  }

  ngAfterViewInit(): void {
    this._router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.loading = true;
      } else if (e instanceof NavigationEnd || e instanceof NavigationCancel) {
        this.loading = false;
      }
    });
  }
}
