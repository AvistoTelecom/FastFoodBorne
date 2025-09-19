import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { MenuService } from '../../core/services/menu.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        HeaderImageComponent,
        ProductCardComponent,
        ProductCarouselComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    readonly menuService = inject(MenuService);
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
}
