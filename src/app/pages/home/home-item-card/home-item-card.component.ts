import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    output,
} from '@angular/core';
import { ProductConfig } from '../../../core/config/product/model';
import { MenuConfig } from '../../../core/config/menu/model';

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
    item = input.required<ProductConfig | MenuConfig>();
    itemSelected = output();

    oldPrice = computed(() => priceFormat.format(this.item().price + 3));

    showDetails() {
        return;
    }
}
