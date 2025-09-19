import { computed, signal, WritableSignal } from '@angular/core';
import { Product, ProductType } from './product.type';

export type MenuComposition = Record<ProductType, Product | null>;

export interface MenuMeta {
    image: string;
    name: string;
    price: number;
    composition: {
        main: string;
    };
}

export class Menu {
    readonly meta: MenuMeta;
    readonly selectedComposition: WritableSignal<MenuComposition>;

    constructor(meta: MenuMeta, mainProduct: Product) {
        this.meta = meta;
        this.selectedComposition = signal<MenuComposition>({
            main: mainProduct,
            side: null,
            drink: null,
        });
    }

    setSideProduct(sideProduct: Product | null): void {
        this.selectedComposition.set({
            ...this.selectedComposition(),
            side: sideProduct,
        });
    }

    setDrinkProduct(drinkProduct: Product | null): void {
        this.selectedComposition.set({
            ...this.selectedComposition(),
            drink: drinkProduct,
        });
    }

    addSupplement(productType: ProductType, ingredient: Product): void {
        const composition = this.selectedComposition();
        const newComposition = {
            ...composition,
            [productType]:
                composition[productType]?.addSupplement(ingredient) ?? null,
        };
        this.selectedComposition.set(newComposition);
    }

    price = computed<number>(() => {
        const composition = this.selectedComposition();
        const mainPrice = composition.main?.price() ?? 0;
        const sidePrice = composition.side?.price() ?? 0;
        const drinkPrice = composition.drink?.price() ?? 0;
        return mainPrice + sidePrice + drinkPrice;
    });
}
