import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(value: any, args:number): unknown {
    let result=value?.name.slice(0,length)
    return 'multi parameter result: '+result;
  }

}
