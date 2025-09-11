import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        HeaderImageComponent,
        ProductCardComponent,
        ProductCarouselComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    menu = {
        image: 'Menu-Dalleux.webp',
        name: 'Menu Dalleux',
        price: 14.99,
        composition: {
            main: 'leDalleux',
        },
    };
}
