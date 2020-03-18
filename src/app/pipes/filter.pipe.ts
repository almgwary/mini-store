import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform (products: Product[], category: string): any {
    return products.filter(product => !category || product.category == category );
  }

}
