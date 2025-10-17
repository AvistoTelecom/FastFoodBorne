import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
    Signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { IngredientCardComponent } from '../../core/components/ingredient-card/ingredient-card.component';
import { ProductSelectorComponent } from '../../core/components/product-selector/product-selector.component';
import { Menu } from '../../core/value-object/menu.class';
import { MenuService } from '../../core/services/menu.service';
import { SupplementCardComponent } from '../../core/components/supplement-card/supplement-card.component';
import { ProductService } from '../../core/services/product.service';
import { SelectionFooterComponent } from '../../core/components/selection-footer/selection-footer.component';
import { OrderService } from '../../core/services/order.service';

@Component({
    selector: 'app-menu-composition',
    standalone: true,
    imports: [
        CommonModule,
        HeaderImageComponent,
        ProductSelectorComponent,
        IngredientCardComponent,
        SupplementCardComponent,
        SelectionFooterComponent,
    ],
    templateUrl: './menu-composition.component.html',
    styleUrl: './menu-composition.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCompositionComponent {
    router = inject(Router);
    route = inject(ActivatedRoute);
    menuService = inject(MenuService);
    productService = inject(ProductService);
    orderService = inject(OrderService);
    Menu = Menu;

    readonly menu: Signal<Menu>;

    menuName = this.route.snapshot.queryParams['menuName'];
    index = this.route.snapshot.queryParams['index'];
    readonly sideProductList = this.productService.getSideProductList();
    readonly drinkProductList = this.productService.getDrinkProductList();

    constructor() {
        if (this.isMenuAlreadyInOrder()) {
            this.menu = signal(this.orderService.menuList()[this.index]);
            return;
        }
        this.menu = signal(this.menuService.getMenu(this.menuName));
    }

    onConfirm(): void {
        if (!this.isMenuAlreadyInOrder()) {
            this.orderService.addMenu(this.menu());
        }
        this.router.navigate(['/home']);
    }

    private isMenuAlreadyInOrder(): boolean {
        return !!this.index;
    }
}
