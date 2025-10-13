export type ProductType = 'main' | 'side' | 'dessert' | 'drink';

export interface ProductConfig {
    image: string;
    name: string;
    price: number;
    type: ProductType;
    ingredientNameList: QuantifiedIngredientName[];
}

export interface QuantifiedIngredientName {
    name: string;
    quantity: number;
}
