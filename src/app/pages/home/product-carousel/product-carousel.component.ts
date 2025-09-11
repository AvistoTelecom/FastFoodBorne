import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
    selector: 'app-product-carousel',
    standalone: true,
    imports: [],
    templateUrl: './product-carousel.component.html',
    styleUrl: './product-carousel.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCarouselComponent {
    menuList = signal([
        {
            imagePath: 'assets/global/Promotion.webp',
            slug: 'Nos offres',
            isSelected: false,
        },
        {
            imagePath: 'assets/product/LeDalleux.webp',
            slug: 'Burgers',
            isSelected: false,
        },
        {
            imagePath: 'assets/product/Frites.webp',
            slug: 'Extras',
            isSelected: false,
        },
        {
            imagePath: 'assets/product/Couscous.webp',
            slug: 'Couscous',
            isSelected: false,
        },
        {
            imagePath: 'assets/product/Boissons.webp',
            slug: 'Boisson',
            isSelected: false,
        },
        {
            imagePath: 'assets/product/Cookie.webp',
            slug: 'Dessert',
            isSelected: false,
        },
        {
            imagePath: 'assets/global/Promotion.webp',
            slug: 'Nos offres',
            isSelected: false,
        },
        {
            imagePath: 'assets/product/LeDalleux.webp',
            slug: 'Burgers',
            isSelected: false,
        },
        {
            imagePath: 'assets/product/Frites.webp',
            slug: 'Extras',
            isSelected: false,
        },
        {
            imagePath: 'assets/product/Couscous.webp',
            slug: 'Couscous',
            isSelected: false,
        },
        {
            imagePath: 'assets/product/Boissons.webp',
            slug: 'Boisson',
            isSelected: false,
        },
        {
            imagePath: 'assets/product/Cookie.webp',
            slug: 'Dessert',
            isSelected: false,
        },
    ]);

    select(selectedMenuItem: string) {
        this.menuList().map((menuItem) => (menuItem.isSelected = false));
        this.menuList()
            .filter((menuItem) => menuItem.slug === selectedMenuItem)
            .map((menuItem) => (menuItem.isSelected = true));
        console.log(this.menuList());
    }
}
