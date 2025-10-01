import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { ProductSelectorComponent } from '../../core/components/product-selector/product-selector.component';
import { IngredientCardComponent } from './ingredient-card/ingredient-card.component';
import { ProductConfigService } from '../../core/config/product/product-config.service';

@Component({
    selector: 'app-main-composition',
    standalone: true,
    imports: [
        CommonModule,
        HeaderImageComponent,
        ProductSelectorComponent,
        IngredientCardComponent,
    ],
    templateUrl: './main-composition.component.html',
    styleUrl: './main-composition.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainCompositionComponent {
    route = inject(ActivatedRoute);
    productConfigService = inject(ProductConfigService);

    productName = this.route.snapshot.queryParams['productName'];

    product = computed(() =>
        this.productConfigService.getProductByName(this.productName),
    );

    availableSizeOption = [
        { name: 'classic', price: undefined },
        { name: 'XL', price: 1.99 },
    ];

    selectedSize = signal<string>('classic');
    ingredientList = computed(() => this.product().ingredientNameList);

    selectSize(size: string) {
        this.selectedSize.set(size);
    }

    deleteIngredient(ingredientName: string) {
        console.log(ingredientName);
    }
}
