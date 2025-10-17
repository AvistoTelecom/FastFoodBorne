import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { HomeItemCardComponent } from './home-item-card/home-item-card.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { Router } from '@angular/router';
import { CategoryConfigService } from '../../core/config/category/category-config.service';
import { ProductConfigService } from '../../core/config/product/product-config.service';
import { MenuConfigService } from '../../core/config/menu/menu-config.service';
import { MenuConfig } from '../../core/config/menu/model';
import { OrderService } from '../../core/services/order.service';
import { Dialog } from '@angular/cdk/dialog';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        HeaderImageComponent,
        HomeItemCardComponent,
        ProductCarouselComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    readonly router = inject(Router);
    categoryService = inject(CategoryConfigService);
    productService = inject(ProductConfigService);
    menuConfigService = inject(MenuConfigService);
    orderService = inject(OrderService);
    dialog = inject(Dialog);

    categoryList = this.categoryService.categoryList;

    readonly selectedCategoryName = signal('Nos offres');

    readonly selectedCategory = computed(() =>
        this.categoryService.getByName(this.selectedCategoryName()),
    );

    readonly productList = computed(() =>
        this.productService.getAllProductFromCategory(
            this.selectedCategory().name,
        ),
    );
    readonly menuList = computed(() =>
        this.menuConfigService.getAllMenuFromCategory(
            this.selectedCategory().name,
        ),
    );

    onMenuSelected(menu: MenuConfig): void {
        this.router.navigate(['/menu-composition'], {
            queryParams: { menuName: menu.name },
        });
        return;
    }

    onAbandon(): void {
        this.orderService.flushOrder();
        this.router.navigate(['/splash-screen']);
    }

    validCommand() {
        // this.dialog.open(DessertModalComponent).closed.subscribe((result) => {
        //     if (result === 'confirmed') {
        //         this.router.navigate(['/order-summary']);
        //     }
        // });
    }
}
