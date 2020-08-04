import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppContentComponent } from '../components/app-content/app-content.component';
import { RatingPipe } from '../pipes/rating.pipe';
import { PricePipe } from '../pipes/price.pipe';
import { HotelsPipe } from '../pipes/hotels.pipe';
import { LabelPipe } from '../pipes/label.pipe';
import { SavingsPipe } from '../pipes/savings.pipe';
import { TaxAndFeesPipe } from '../pipes/tax-and-fees.pipe';


@NgModule({
  declarations: [
    AppContentComponent,
    RatingPipe,
    PricePipe,
    HotelsPipe,
    LabelPipe,
    SavingsPipe,
    TaxAndFeesPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [
    AppContentComponent
  ]
})
export class AppContentProviderModule { }
