export interface Ingredient {
    meta: {
        name: string;
        image: string;
        price: number;
    };
}

export interface QuantifiedIngredient {
    ingredient: Ingredient;
    quantity: number;
}

export interface QuantifiedIngredientName {
    ingredientName: string;
    quantity: number;
}
