import {
    ChangeDetectionStrategy,
    Component,
    input,
    output,
} from '@angular/core';
import { Ingredient } from '../../models/ingredient.class';

@Component({
    selector: 'app-supplement-card',
    standalone: true,
    imports: [],
    templateUrl: './supplement-card.component.html',
    styleUrl: './supplement-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupplementCardComponent {
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
