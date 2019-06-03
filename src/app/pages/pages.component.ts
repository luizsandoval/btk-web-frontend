import { Component } from '@angular/core';

@Component({
    selector: 'btk-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})

export class PagesComponent {

    showFooter = false;

    handleRouteChange = (event) => {
        console.log(event);
    }
}
