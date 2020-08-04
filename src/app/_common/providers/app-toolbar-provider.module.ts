import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppToolbarComponent } from '../components/app-toolbar/app-toolbar.component';


@NgModule({
  declarations: [
    AppToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    AppToolbarComponent
  ]
})
export class AppToolbarProviderModule { }
