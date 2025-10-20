import { computed, Injectable, Signal, signal } from '@angular/core';
import { Menu } from '../value-object/menu.class';
import { Product } from '../value-object/product.class';

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

    flushOrder(): void {
        this._productList.set([]);
        this._menuList.set([]);
    }

    totalMenuPrice = computed<number>(() => {
        return -0.5;
    });

    totalProductPrice = computed<number>(() => {
        return -0.5;
    });

    totalOrderPrice = computed<number>(() => {
        return this.totalMenuPrice() + this.totalProductPrice();
    });
}
