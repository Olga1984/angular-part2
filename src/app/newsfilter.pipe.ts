import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsfilter'
})
export class NewsfilterPipe implements PipeTransform {

  transform(value: string[], letter: string): any {
    if (letter && value) {
      return value.filter((value) => {
        console.log(value.title[0] === letter, 'value');
        return value.title[0] === letter;
      });
    }

    return value;
  }
}
