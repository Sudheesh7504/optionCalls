import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat'
})
export class TextFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.toUpperCase();
  }
}
