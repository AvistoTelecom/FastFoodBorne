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
import { MenuService } from '../../core/services/menu.service';
import { Router, RouterModule } from '@angular/router';
import { Menu } from '../../core/models/menu.type';
import { Product } from '../../core/models/product.type';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        HeaderImageComponent,
        HomeItemCardComponent,
        ProductCarouselComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    readonly menuService = inject(MenuService);
    readonly router = inject(Router);
    readonly categoryList = this.menuService.getCategoryList();
    readonly selectedCategoryName = signal('Nos offres');

    readonly selectedCategory = computed(
        () =>
            this.categoryList.find(
                (category) =>
                    category.meta.name === this.selectedCategoryName(),
            )!,
    );
    readonly productList = computed(() =>
        this.menuService.getProductListOfACategory(this.selectedCategory()),
    );
    readonly menuList = computed(() =>
        this.menuService.getMenuListOfACategory(this.selectedCategory()),
    );

    onMenuSelected(menu: Menu): void {
        console.log(menu);
        this.router.navigate(['/main-composition'], {
            queryParams: { menuName: menu.meta.name },
        });
        return;
    }
    onProductSelected(product: Product): void {
        this.router.navigate(['/main-composition'], {
            queryParams: { productName: product.meta.name },
        });
        return;
    }
}
