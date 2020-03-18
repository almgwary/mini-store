import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-form-reactive',
  templateUrl: './product-form-reactive.component.html',
  styleUrls: ['./product-form-reactive.component.scss']
})
export class ProductFormReactiveComponent implements OnInit {

  product: Product = {};

  form: FormGroup;
    
  constructor(private formBuilder: FormBuilder, private router: Router, private data: DataService) {
     
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.form = this.formBuilder.group({
      "name": [this.product.name, Validators.required],
      "img": [this.product.img, Validators.required],
      "price": [this.product.price, [Validators.required, Validators.min(0)]],
      "category": [this.product.category, Validators.required],
  });
  }
  submit(){
    console.log(this.form.value);
    this.product = this.form.value;
    this.data.products.push(this.product)
    this.router.navigate(['/'])
  }


  
  reset(){
    this.initForm();
  }

}
