import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(servicelist:any, type:string): any {
    if(type=="All")
      return servicelist;
    return servicelist.filter((x:any)=>x.type==type)
  }

}
