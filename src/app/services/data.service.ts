import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: Product[] = [
    { id: 0, name: 'Hat', price: 5.99, category: 'Accessory', img: '👒' },
    { id: 1, name: 'Gloves', price: 1.99, category: 'Accessory', img: '🧤'},
    { id: 2, name: 'Boots', price: 30.00, category: 'Footwear', img: '👢' },
    { id: 3, name: 'Coat', price: 55.99, category: 'Misc', img: '🧥' },
    { id: 4, name: 'Leather Shoes', price: 16.00, category: 'Footwear', img: '👞' },
    { id: 5, name: 'Cap', price: 3.75, category: 'Accessory', img: '🧢' },
    { id: 6, name: 'Scarf', price: 2.50, category: 'Accessory', img: '🧣' },
    { id: 7, name: 'Jumper', price: 12.00, category: 'Misc', img: '👚' }
  ];
  
  constructor() { }
}
