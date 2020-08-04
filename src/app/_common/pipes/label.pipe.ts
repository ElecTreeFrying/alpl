import { Pipe, PipeTransform } from '@angular/core';

import { QService } from '../services/q.service';


@Pipe({
  name: 'label'
})
export class LabelPipe implements PipeTransform {

  constructor(
    private q: QService
  ) {}

  transform(value: any): any {

    if (!value) return;
    return value === 'Rates unavailable.' ? false : true;
  }

}
