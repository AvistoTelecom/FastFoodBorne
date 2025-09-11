import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
} from '@angular/core';
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
    menu = input.required<Menu>();

    imageUrl = computed(() => `./assets/menu/${this.menu().image}`);
    oldPrice = computed(() => priceFormat.format(this.menu().price + 3));
}
