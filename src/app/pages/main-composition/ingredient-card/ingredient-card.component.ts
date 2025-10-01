import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    output,
} from '@angular/core';

@Component({
    selector: 'app-ingredient-card',
    standalone: true,
    imports: [],
    templateUrl: './ingredient-card.component.html',
    styleUrl: './ingredient-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientCardComponent {
    ingredient = input.required<{
        name: string;
        quantity: number;
    }>();

    image = computed(
        () => `./assets/ingredient/${this.ingredient().name}.webp`,
    );
    delete = output<void>();

    deleteIngredient() {
        this.delete.emit();
    }
}
