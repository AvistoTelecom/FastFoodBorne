import { CommonModule } from '@angular/common';
import {
    Component,
    ChangeDetectionStrategy,
    input,
    output,
} from '@angular/core';
import { Product } from '../../../core/models/product.class';

@Component({
    selector: 'app-modal-product',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './modal-product.component.html',
    styleUrls: ['./modal-product.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalProductComponent {
    product = input.required<Product>();
    isSelected = input.required<boolean>();
    selected = output<void>();

    onSelection(): void {
        this.selected.emit();
    }
}
