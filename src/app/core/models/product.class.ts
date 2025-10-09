import { ProductConfig } from '../config/product/model';
import { Ingredient } from './ingredient.class';

export class Product {
    readonly name: string;
    readonly image: string;
    readonly price: number;
    readonly ingredientList: Ingredient[];
    readonly supplementList: Ingredient[];

    constructor(
        config: ProductConfig,
        ingredientList: Ingredient[],
        supplementList: Ingredient[],
    ) {
        this.name = config.name;
        this.image = config.image;
        this.price = config.price;
        this.ingredientList = ingredientList;
        this.supplementList = supplementList;
    }

    get totalPrice(): number {
        return this.price + this.supplementPrice;
    }

    get supplementPrice(): number {
        return this.supplementList.reduce(
            (total, ingredient) => total + ingredient.totalPrice,
            0,
        );
    }
}
