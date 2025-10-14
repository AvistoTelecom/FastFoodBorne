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
import { IngredientConfigService } from '../../core/config/ingredient/ingredient-config.service';
import { ProductConfigService } from '../../core/config/product/product-config.service';
import { Menu } from '../../core/value-object/menu.class';

@Component({
    selector: 'app-main-composition',
    standalone: true,
    imports: [
        CommonModule,
        HeaderImageComponent,
        ProductSelectorComponent,
        // IngredientCardComponent,
    ],
    templateUrl: './main-composition.component.html',
    styleUrl: './main-composition.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainCompositionComponent {
    route = inject(ActivatedRoute);
    productConfigService = inject(ProductConfigService);
    ingredientConfigService = inject(IngredientConfigService);
    Menu = Menu;

    productName = this.route.snapshot.queryParams['productName'];

    readonly product = computed(() =>
        this.productConfigService.getProductByName(this.productName),
    );

    selectedSize = signal<string>('classic');
    ingredientList = computed(() => this.product().ingredientNameList);

    selectSize(size: string) {
        this.selectedSize.set(size);
    }

    deleteIngredient(ingredientName: string) {
        console.log(ingredientName);
    }
}
