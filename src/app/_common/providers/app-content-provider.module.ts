import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppContentComponent } from '../components/app-content/app-content.component';


@NgModule({
  declarations: [
    AppContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppContentComponent
  ]
})
export class AppContentProviderModule { }
