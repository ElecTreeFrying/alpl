import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { AppSideOptionsComponent } from '../components/app-side-options/app-side-options.component';


@NgModule({
  declarations: [
    AppSideOptionsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    AppSideOptionsComponent
  ]
})
export class AppSideOptionsProviderModule { }
