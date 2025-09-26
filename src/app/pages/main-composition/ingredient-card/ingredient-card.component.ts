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
        ingredientName: string;
        quantity: number;
    }>();

    image = computed(
        () => `./assets/ingredient/${this.ingredient().ingredientName}.webp`,
    );
    selected = input<boolean>(false);
    isSelected = output<void>();

    isClicked() {
        this.isSelected.emit();
    }
}
