import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Product, products} from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('You just added this awesome product to the cart!');
  }



  constructor(private route: ActivatedRoute,
              private cartService: CartService
              ) { }

  ngOnInit(): void {
    //Get product ID from Current Route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));


    //Find the product that matches with the Id from the route
    this.product = products.find(prod => prod.id === productIdFromRoute);
  }

}
