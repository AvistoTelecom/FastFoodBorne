import { computed, Injectable, Signal, signal } from '@angular/core';
import { Product } from '../models/product.class';
import { Menu } from '../models/menu.class';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    private _productList = signal<Product[]>([]);
    private _menuList = signal<Menu[]>([]);

    addProduct(product: Product) {
        this._productList.set([...this._productList(), product]);
    }

    get productList() {
        return this._productList.asReadonly();
    }

    addMenu(menu: Menu) {
        this._menuList.set([...this._menuList(), menu]);
    }

    get menuList(): Signal<Menu[]> {
        return this._menuList.asReadonly();
    }

    totalMenuPrice = computed(() => {
        return this._menuList().reduce(
            (total, menu) => total + menu.totalPrice,
            0,
        );
    });

    totalProductPrice = computed(() => {
        return this._productList().reduce(
            (total, product) => total + product.totalPrice,
            0,
        );
    });

    totalOrderPrice = computed(() => {
        return this.totalProductPrice() + this.totalMenuPrice();
    });
}
