import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../core/services/menu.service';
import { Menu } from '../../core/models/menu.type';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { ProductSelectorComponent } from '../../core/components/product-selector/product-selector.component';
import { IngredientCardComponent } from './ingredient-card/ingredient-card.component';

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
    readonly menuService = inject(MenuService);
    menuName = this.route.snapshot.queryParams['menuName'];
    menu = computed<Menu>(() => this.menuService.getMenuByName(this.menuName));

    availableSizeOption = [
        { name: 'classic', price: undefined },
        { name: 'XL', price: 1.99 },
    ];

    selectedSize = signal<string>('classic');
    ingredientList = computed(
        () => this.menu().selectedComposition().main?.meta.ingredientNameList,
    );

    selectSize(size: string) {
        this.selectedSize.set(size);
    }
}
