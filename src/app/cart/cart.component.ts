import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  clearCart() {
    this.cartService.clearCart();
    window.location.reload();
    window.alert('Now the cart is empty!');
    
  }

  refresh() {
    this.cd.detectChanges();
  }

  constructor(
    private cartService: CartService,
    private cd: ChangeDetectorRef
    ) { }

  

  ngOnInit(): void {
  }

}
