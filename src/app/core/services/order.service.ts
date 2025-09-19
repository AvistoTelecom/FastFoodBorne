import { computed, Injectable, signal } from '@angular/core';
import { Order } from '../models/order.type';
import { Product } from '../models/product.type';
import { Menu } from '../models/menu.type';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    readonly order = signal<Order>([]);

    totalPrice = computed<number>(() =>
        this.order().reduce((total, orderItem) => {
            return total + orderItem.item.price() * orderItem.quantity;
        }, 0),
    );

    addItem(item: Product | Menu, quantity: number): void {
        const isItemAlreadyInList = this.order().some(
            (orderItem) => orderItem.item.meta.name === item.meta.name,
        );
        if (!isItemAlreadyInList) {
            this.order.set([...this.order(), { item, quantity }]);
            return;
        }
        const updatedOrder = this.order().map((orderItem) => {
            if (orderItem.item.meta.name === item.meta.name) {
                return {
                    item: orderItem.item,
                    quantity: orderItem.quantity + quantity,
                };
            }
            return orderItem;
        });
        this.order.set([...updatedOrder]);
    }

    removeItem(item: Product | Menu): void {
        this.order.set(
            this.order().filter(
                (orderItem) => orderItem.item.meta.name !== item.meta.name,
            ),
        );
    }
}
