import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitSize'
})
export class LimitSizePipe implements PipeTransform {

  transform(value: string, size: number = 150): any {
    return value.length > size ? value.slice(0, size)+"..." : value;
  }

}
