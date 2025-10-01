import {
    ChangeDetectionStrategy,
    Component,
    input,
    model,
} from '@angular/core';
import { CategoryConfig } from '../../../core/config/category/model';

@Component({
    selector: 'app-product-carousel',
    standalone: true,
    imports: [],
    templateUrl: './product-carousel.component.html',
    styleUrl: './product-carousel.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCarouselComponent {
    categoryList = input.required<CategoryConfig[]>();
    selectedCategoryName = model.required<string>();

    select(selectedMenuItem: string) {
        this.selectedCategoryName.set(selectedMenuItem);
    }
}
