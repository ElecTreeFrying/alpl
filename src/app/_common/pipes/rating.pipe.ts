import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: string, rating: number): string {

    if (!value) return;
    return `width:${rating*10}%`;
  }

}
