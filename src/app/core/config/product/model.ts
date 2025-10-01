export interface ProductConfig {
    image: string;
    name: string;
    price: number;
    type: string;
    ingredientNameList: QuantifiedIngredientName[];
}

export interface QuantifiedIngredientName {
    name: string;
    quantity: number;
}
