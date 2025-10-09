import { Injectable } from '@angular/core';
import { IngredientList } from './ingredientList';
import { IngredientConfig } from './model';

@Injectable({
    providedIn: 'root',
})
export class IngredientConfigService {
    private readonly _ingredientList = IngredientList;

    get ingredientList(): IngredientConfig[] {
        return this._ingredientList.map((ingredient) => ({
            ...ingredient,
            image: this.formatImagePath(ingredient.image),
        }));
    }
    getIngredientByName(name: string): IngredientConfig {
        const ingredient = this.ingredientList.find(
            (ingredient) => ingredient.name === name,
        );
        if (!ingredient) throw new Error('Ingredient not found by name');
        return ingredient;
    }

    getIngredientListByNameList(nameList: string[]): IngredientConfig[] {
        return this._ingredientList.filter((ingredient) =>
            nameList.includes(ingredient.name),
        );
    }

    private formatImagePath(url: string) {
        return `assets/ingredient/${url}`;
    }
}
