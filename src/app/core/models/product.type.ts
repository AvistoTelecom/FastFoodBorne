import { computed, signal } from '@angular/core';
import {
    Ingredient,
    QuantifiedIngredient,
    QuantifiedIngredientName,
} from './ingredient.type';

export type ProductType = 'main' | 'drink' | 'side';

export interface ProductMeta {
    image: string;
    name: string;
    price: number;
    type: string;
    ingredientNameList: QuantifiedIngredientName[];
}

export class Product {
    readonly meta: ProductMeta;
    readonly selectedIngredientList = signal<
        Record<string, QuantifiedIngredient>
    >({});

    constructor(meta: ProductMeta) {
        this.meta = meta;
    }

    addSupplement(ingredient: Ingredient): void {
        const ingredientName = ingredient.meta.name;
        if (this.selectedIngredientList()[ingredientName]) {
            this.selectedIngredientList.set({
                ...this.selectedIngredientList(),
                [ingredientName]: {
                    ingredient,
                    quantity:
                        this.selectedIngredientList()[ingredientName].quantity +
                        1,
                },
            });
        } else {
            this.selectedIngredientList.set({
                ...this.selectedIngredientList(),
                [ingredient.meta.name]: {
                    ingredient,
                    quantity: 1,
                },
            });
        }
    }

    removeSupplement(ingredient: Ingredient): void {
        const ingredientName = ingredient.meta.name;
        if (!this.selectedIngredientList()[ingredientName]) {
            return;
        }
        if (this.selectedIngredientList()[ingredientName].quantity === 0) {
            return;
        }
        this.selectedIngredientList.set({
            ...this.selectedIngredientList(),
            [ingredient.meta.name]: {
                ingredient,
                quantity:
                    this.selectedIngredientList()[ingredientName].quantity - 1,
            },
        });
    }

    price = computed<number>(() => {
        const supplementPrice = Object.entries(
            this.selectedIngredientList(),
        ).reduce((price, object) => {
            const ingredient = object[1];

            return (
                price + ingredient.ingredient.meta.price * ingredient.quantity
            );
        }, 0);
        return this.meta.price + supplementPrice;
    });

    image = computed(() => `./assets/product/${this.meta.image}`);
}
