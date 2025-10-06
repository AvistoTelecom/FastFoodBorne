import { CommonModule } from '@angular/common';
import {
    Component,
    ChangeDetectionStrategy,
    input,
    model,
} from '@angular/core';
import { Product } from '../../models/product.class';

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
    selected = model<boolean>(false);
}
