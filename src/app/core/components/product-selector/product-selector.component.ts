import { CommonModule } from '@angular/common';
import {
    Component,
    ChangeDetectionStrategy,
    input,
    output,
} from '@angular/core';

@Component({
    selector: 'app-product-selector',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-selector.component.html',
    styleUrl: './product-selector.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSelectorComponent {
    image = input.required<string>();
    title = input.required<string>();
    price = input<number>();
    selected = input<boolean>(false);
    isSelected = output<void>();

    isClicked() {
        this.isSelected.emit();
    }
}
