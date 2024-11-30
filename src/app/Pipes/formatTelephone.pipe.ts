import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: any): string {
    const stringValue = value ? String(value) : '';

    const numericValue = stringValue.replace(/\D/g, '');

    if (numericValue.length === 10) {
      return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 6)}-${numericValue.slice(6)}`;
    } else if (numericValue.length === 11) {
      return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7)}`;
    }

    return value;
  }
}
