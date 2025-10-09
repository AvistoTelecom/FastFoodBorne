import { IngredientConfig } from '../config/ingredient/model';

export class Ingredient {
    readonly name: string;
    readonly image: string;
    readonly price: number;
    readonly initialQuantity: number;
    private _quantity: number;

    constructor(config: IngredientConfig, initialQuantity: number) {
        this.name = config.name;
        this.image = config.image;
        this.price = config.price;
        this.initialQuantity = initialQuantity;
        this._quantity = initialQuantity;
    }

    get quantity(): number {
        return this._quantity;
    }

    get totalPrice(): number {
        if (this._quantity === this.initialQuantity) {
            return 0;
        }
        return this.price * this._quantity;
    }

    addQuantity(): void {
        this._quantity += 1;
    }

    removeQuantity(): void {
        if (this._quantity > 0) {
            this._quantity -= 1;
        }
    }
}
