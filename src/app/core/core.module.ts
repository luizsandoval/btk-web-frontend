import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavModule } from './main-nav/main-nav.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [ CommonModule, MainNavModule ],
    exports: [MainNavModule],
    providers: [],
    declarations: [FooterComponent],
})
export class CoreModule {}
