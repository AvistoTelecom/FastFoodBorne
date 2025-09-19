import {
    ChangeDetectionStrategy,
    Component,
    input,
    model,
} from '@angular/core';
import { Category } from '../../../core/models/category.type';

@Component({
    selector: 'app-product-carousel',
    standalone: true,
    imports: [],
    templateUrl: './product-carousel.component.html',
    styleUrl: './product-carousel.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCarouselComponent {
    categoryList = input.required<Category[]>();
    selectedCategoryName = model.required<string>();

    select(selectedMenuItem: string) {
        this.selectedCategoryName.set(selectedMenuItem);
    }
}
