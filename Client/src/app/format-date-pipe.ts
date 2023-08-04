import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: any, args?: any): any {
    var datePipe = new DatePipe('en-US');
    return datePipe.transform(date, 'dd/MM/yyyy HH:mm:ss')
  }
}
