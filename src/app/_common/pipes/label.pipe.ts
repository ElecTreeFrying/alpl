import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'label'
})
export class LabelPipe implements PipeTransform {

  transform(value: any): any {

    if (!value) return;
    return value === 'Rates unavailable.' ? false : true;
  }

}
