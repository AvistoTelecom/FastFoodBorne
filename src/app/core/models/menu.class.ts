import { MenuConfig } from '../config/menu/model';
import { Product } from './product.class';

export class Menu {
    readonly image: string;
    readonly name: string;
    readonly price: number;
    readonly main: Product;
    private _size: 'classic' | 'XL';
    private _side: Product | null;
    private _drink: Product | null;

    static sizeSelectionList = [
        {
            name: 'classic',
            price: 0,
            image: '/assets/global/classic-size.png',
        },
        { name: 'XL', price: 1.99, image: '/assets/global/xl-size.png' },
    ] as const;

    get side(): Product | null {
        return this._side;
    }

    get drink(): Product | null {
        return this._drink;
    }

    constructor(config: MenuConfig, main: Product) {
        this.name = config.name;
        this.image = config.image;
        this.price = config.price;
        this.main = main;
        this._size = 'classic';
        this._side = null;
        this._drink = null;
    }
    get size(): 'classic' | 'XL' {
        return this._size;
    }

    changeSide(side: Product) {
        this._side = side;
    }

    changeDrink(drink: Product) {
        this._drink = drink;
    }

    changeSize(size: 'classic' | 'XL') {
        this._size = size;
    }

    get sizePrice(): number {
        const sizeOption = Menu.sizeSelectionList.find(
            (size) => size.name === this._size,
        );
        if (!sizeOption) throw new Error('Size option not found');
        return sizeOption.price;
    }

    get totalPrice(): number {
        return [this.main, this._side, this._drink].reduce((total, product) => {
            if (!product) return total;
            return total + product.supplementPrice;
        }, this.price + this.sizePrice);
    }

    get isValid(): boolean {
        return this.side !== null && this.drink !== null;
    }
}
