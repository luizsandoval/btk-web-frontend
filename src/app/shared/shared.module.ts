import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderSpinnerModule } from './components/loader-spinner/loader-spinner.module';

@NgModule({
    imports: [CommonModule, LoaderSpinnerModule],
    exports: [ LoaderSpinnerModule ]
})

export class SharedModule {}
