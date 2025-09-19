import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
} from '@angular/core';
import { Product } from '../../../core/models/product.type';
import { Menu } from '../../../core/models/menu.type';

const priceFormat = new Intl.NumberFormat('fr-FR', {
    maximumFractionDigits: 2,
});

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
    product = input.required<Product | Menu>();

    oldPrice = computed(() =>
        priceFormat.format(this.product().meta.price + 3),
    );

    showDetails() {
        return;
    }
}
