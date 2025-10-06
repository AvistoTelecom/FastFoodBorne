import { MenuConfig } from '../config/menu/model';
import { Product } from './product.class';

export class Menu {
    readonly config: MenuConfig;
    readonly main: Product;
    private _side: Product | null;
    private _drink: Product | null;

    get side(): Product | null {
        return this._side;
    }

    get drink(): Product | null {
        return this._drink;
    }

    constructor(config: MenuConfig, main: Product) {
        this.config = config;
        this.main = main;
        this._side = null;
        this._drink = null;
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

    changeSide(side: Product) {
        this._side = side;
    }

    changeDrink(drink: Product) {
        this._drink = drink;
    }

    get totalPrice(): number {
        return [this.main, this._side, this._drink].reduce((total, product) => {
            if (!product) return total;
            return total + product.supplementPrice;
        }, this.price);
    }
}
