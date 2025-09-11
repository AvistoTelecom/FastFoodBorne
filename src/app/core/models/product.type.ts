export type ProductType = 'main' | 'drink' | 'side';

export interface Product {
    name: string;
    image: string;
    type: ProductType;
    price: number;
    ingredientList: Ingredient[];
}

interface Ingredient {
    name: string;
    defaultQuantity: number;
}
