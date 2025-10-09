import { ProductConfig } from '../config/product/model';
import { Ingredient } from './ingredient.class';

export class Product {
    readonly name: string;
    readonly image: string;
    readonly price: number;
    readonly ingredientList: Ingredient[];
    private _supplementList: Ingredient[];

    constructor(config: ProductConfig, ingredientList: Ingredient[]) {
        this.name = config.name;
        this.image = config.image;
        this.price = config.price;
        this.ingredientList = ingredientList;
        this._supplementList = [];
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
