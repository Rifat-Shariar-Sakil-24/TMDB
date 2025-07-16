import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordLimit',
  standalone: true
})
export class WordLimitPipe implements PipeTransform {

  transform(value: string, maxWords: number): string {
    if (!value) return '';
    const words = value.split(' ');
    return words.length > maxWords
      ? words.slice(0, maxWords).join(' ') + '...'
      : value;
  }

}
