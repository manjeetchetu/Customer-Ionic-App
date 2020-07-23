import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customersearch'
})
export class CustomersearchPipe implements PipeTransform {

  transform(items: any[], customerName: string): any[] {
    if(!items) return [];
    if(!customerName) return items;
    customerName = customerName.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(customerName);  
    });
  }

}
