import { Component, OnInit } from '@angular/core';
import {products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products = products;

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("Don't you worry, you'll be notified when the product is on sale!")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
