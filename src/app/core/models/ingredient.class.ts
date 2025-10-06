import { IngredientConfig } from '../config/ingredient/model';

export class Ingredient {
    readonly config: IngredientConfig;
    readonly initialQuantity: number;
    private _quantity: number;

    constructor(config: IngredientConfig, initialQuantity: number) {
        this.config = config;
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

    get name(): string {
        return this.config.name;
    }
    get price(): number {
        return this.config.price;
    }
    get image(): string {
        return this.config.image;
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
