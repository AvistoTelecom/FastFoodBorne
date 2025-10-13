import {
    ChangeDetectionStrategy,
    Component,
    input,
    output,
} from '@angular/core';
import { Ingredient } from '../../models/ingredient.class';

@Component({
    selector: 'app-ingredient-card',
    standalone: true,
    imports: [],
    templateUrl: './ingredient-card.component.html',
    styleUrl: './ingredient-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientCardComponent {
    ingredient = input.required<Ingredient>();

    remove = output<void>();
    add = output<void>();

    removeIngredient() {
        this.remove.emit();
    }

    addIngredient() {
        this.add.emit();
    }
}
