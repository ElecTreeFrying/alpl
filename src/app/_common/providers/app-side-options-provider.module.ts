import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSideOptionsComponent } from '../components/app-side-options/app-side-options.component';


@NgModule({
  declarations: [
    AppSideOptionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppSideOptionsComponent
  ]
})
export class AppSideOptionsProviderModule { }
