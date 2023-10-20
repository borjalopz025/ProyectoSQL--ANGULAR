import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codigo'
})
export class CodigoPipe implements PipeTransform {

  transform(value:number): string {

    let resu: string;
    resu= "ref-" + value
    return resu ;
  }

}
