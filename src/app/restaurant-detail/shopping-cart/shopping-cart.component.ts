import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart-service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() { }

  total() {
    return this.shoppingCartService.total();
  }

  clear() {
    this.shoppingCartService.clear()
  }

  items(): any[] {
    return this.shoppingCartService.cartItems;
  }

  removeItem(item: any) {
    this.shoppingCartService.removeItem(item);
  }

  addItem(item: any) {
    this.shoppingCartService.addItem(item);
  }
}
