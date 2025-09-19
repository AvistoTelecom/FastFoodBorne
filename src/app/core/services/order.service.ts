import { computed, Injectable, signal } from '@angular/core';
import { Order } from '../models/order.type';
import { Menu } from '../models/menu.type';
import { Product } from '../models/product.type';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    readonly order = signal<Order>([]);

    totalPrice = computed<number>(() =>
        this.order().reduce((total, orderItem) => {
            const initialPrice = orderItem.item.meta.price;
            const supplementPrice = this.#calculateTotalSupplementPrice(
                orderItem.item,
            );

            return total + initialPrice * orderItem.quantity;
        }, 0),
    );

    #calculateTotalSupplementPrice(orderItem: Product | Menu): number {
        if (this.#isMenu(orderItem)) {
            const { side, drink } = orderItem.selectedComposition;
            const supplementPrice = 0;
        }
        return 0;
    }

    #isMenu(item: Product | Menu): item is Menu {
        if (item.selectedComposition) {
            return true;
        }
        return false;
    }
}
