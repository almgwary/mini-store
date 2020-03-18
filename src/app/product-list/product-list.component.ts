import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

 

  selectedFilter;
  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
