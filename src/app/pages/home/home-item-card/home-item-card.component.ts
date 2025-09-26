import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    output,
} from '@angular/core';
import { Product } from '../../../core/models/product.type';
import { Menu } from '../../../core/models/menu.type';

const priceFormat = new Intl.NumberFormat('fr-FR', {
    maximumFractionDigits: 2,
});

@Component({
    selector: 'app-home-item-card',
    standalone: true,
    imports: [],
    templateUrl: './home-item-card.component.html',
    styleUrl: './home-item-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeItemCardComponent {
    item = input.required<Product | Menu>();
    itemSelected = output();

    oldPrice = computed(() => priceFormat.format(this.item().meta.price + 3));

    showDetails() {
        return;
    }
}
