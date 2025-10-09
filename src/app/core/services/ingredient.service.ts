import { inject, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.class';
import { IngredientConfigService } from '../config/ingredient/ingredient-config.service';
import { QuantifiedIngredientName } from '../config/product/model';

@Injectable({
    providedIn: 'root',
})
export class IngredientService {
    ingredientConfigService = inject(IngredientConfigService);

    getIngredientByQuantified(
        quantifiedIngredientName: QuantifiedIngredientName,
    ): Ingredient {
        const config = this.ingredientConfigService.getIngredientByName(
            quantifiedIngredientName.name,
        );
        return new Ingredient(config, quantifiedIngredientName.quantity);
    }

    getIngredientByName(name: string, quantity: number): Ingredient {
        const config = this.ingredientConfigService.getIngredientByName(name);
        return new Ingredient(config, quantity);
    }
    getIngredientListByQuantifiedList(
        quantifiedIngredientNameList: QuantifiedIngredientName[],
    ): Ingredient[] {
        const ingredientConfigList =
            this.ingredientConfigService.getIngredientListByNameList(
                quantifiedIngredientNameList.map(
                    (ingredient) => ingredient.name,
                ),
            );
        return ingredientConfigList.map((ingredientConfig) => {
            const quantity = quantifiedIngredientNameList.find(
                (ingredient) => ingredient.name === ingredientConfig.name,
            )?.quantity;
            if (quantity === undefined) {
                throw new Error('Quantity not found for ingredient');
            }
            return new Ingredient(ingredientConfig, quantity);
        });
    }
}
