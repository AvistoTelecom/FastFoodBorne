import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../value-object/product.class';
import { Menu } from '../value-object/menu.class';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    private _productList = signal<Product[]>([]);
    private _menuList = signal<Menu[]>([]);
    private _location = '';

    readonly menuList = this._menuList.asReadonly();
    readonly productList = this._productList.asReadonly();

    set location(location: string) {
        this._location = location;
    }

    addProduct(product: Product) {
        this._productList.set([...this._productList(), product]);
    }

    addProductList(productList: Product[]) {
        this._productList.set([...this._productList(), ...productList]);
    }

    addMenu(menu: Menu) {
        this._menuList.set([...this._menuList(), menu]);
    }

    totalMenuPrice = computed<number>(() => {
        return this._menuList().reduce(
            (total, menu) => total + menu.totalPrice,
            0,
        );
    });

    totalProductPrice = computed<number>(() => {
        return this._productList().reduce(
            (total, product) => total + product.totalPrice,
            0,
        );
    });

    totalOrderPrice = computed<number>(() => {
        return +(this.totalProductPrice() + this.totalMenuPrice()).toFixed(2);
    });

    flushOrder(): void {
        this._productList.set([]);
        this._menuList.set([]);
    }
}
