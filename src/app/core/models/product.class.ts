import { ProductConfig } from '../config/product/model';
import { Ingredient } from './ingredient.class';

export type ProductType = 'main' | 'drink' | 'side';

export class Product {
    readonly config: ProductConfig;
    readonly ingredientList: Ingredient[];
    private _supplementList: Ingredient[];

    constructor(config: ProductConfig, ingredientList: Ingredient[]) {
        this.config = config;
        this.ingredientList = ingredientList;
        this._supplementList = [];
    }

    get name(): string {
        return this.config.name;
    }
    get image(): string {
        return this.config.image;
    }
    get price(): number {
        return this.config.price;
    }

    get supplementList() {
        return this._supplementList;
    }

    get totalPrice(): number {
        return (
            this.price + this.totalIngredientPrice + this.totalSupplementPrice
        );
    }

    get supplementPrice(): number {
        return this.totalSupplementPrice + this.totalIngredientPrice;
    }

    addSupplement(ingredient: Ingredient): void {
        const supplement = this._supplementList.find(
            (supplement) => supplement.name === ingredient.name,
        );
        if (supplement) {
            supplement.addQuantity();
            return;
        }
        this._supplementList.push(ingredient);
    }

    private get totalIngredientPrice(): number {
        return this.ingredientList.reduce(
            (total, ingredient) => total + ingredient.totalPrice,
            0,
        );
    }

    private get totalSupplementPrice(): number {
        return this._supplementList.reduce(
            (total, ingredient) => total + ingredient.totalPrice,
            0,
        );
    }
}
