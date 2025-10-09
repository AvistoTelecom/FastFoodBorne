import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    output,
} from '@angular/core';
import { Ingredient } from '../../../core/models/ingredient.class';

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

    image = computed(
        () => `./assets/ingredient/${this.ingredient().name}.webp`,
    );
    remove = output<void>();
    add = output<void>();

    removeIngredient() {
        this.remove.emit();
    }

    addIngredient() {
        this.add.emit();
    }
}
