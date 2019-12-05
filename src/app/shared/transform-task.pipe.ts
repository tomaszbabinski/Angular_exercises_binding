import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTask'
})
export class TransformTaskPipe implements PipeTransform {

  transform(value: string, arg: string = ''): any {
    return value.charAt(0).toUpperCase() + value.slice(1) + arg;
  }

}
