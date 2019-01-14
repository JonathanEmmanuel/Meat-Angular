import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {
    cartItems: CartItem[] = [];

    clear() {
        this.cartItems = [];
    }

    addItem(menuItem: MenuItem) {
        let foundItem = this.cartItems.find((mItem) => mItem.menuItem.id === menuItem.id)
        if (foundItem) {
            foundItem.quantity = foundItem.quantity + 1
        } else {
            this.cartItems.push(new CartItem(menuItem))
        }
    }
    removeItem(item: CartItem) {
        this.cartItems.splice(this.cartItems.indexOf(item, 1))
    }

    items() {

    }
    total(): number {
        return this.cartItems
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }
}