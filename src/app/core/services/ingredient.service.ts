import { inject, Injectable } from '@angular/core';
import { Ingredient } from '../value-object/ingredient.class';
import { IngredientConfigService } from '../config/ingredient/ingredient-config.service';
import { QuantifiedIngredientName } from '../config/product/model';

const supplementNameList: string[] = [
    'Steak',
    'Steak végétal',
    'Oeuf',
    'Bacon',
    'Cheddar',
];

@Injectable({
    providedIn: 'root',
})
export class IngredientService {
    ingredientConfigService = inject(IngredientConfigService);

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

    getSupplementList(): Ingredient[] {
        const supplementConfigList =
            this.ingredientConfigService.getIngredientListByNameList(
                supplementNameList,
            );
        return supplementConfigList.map((ingredientConfig) => {
            return new Ingredient(ingredientConfig, 0);
        });
    }
}
