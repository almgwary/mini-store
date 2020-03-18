import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  product: Product = {};

  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.product);
  }

}
