import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
    Signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../core/models/menu.class';
import { MenuService } from '../../core/services/menu.service';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { ProductSelectorComponent } from '../../core/components/product-selector/product-selector.component';
import { IngredientCardComponent } from '../../core/components/ingredient-card/ingredient-card.component';

@Component({
    selector: 'app-menu-composition',
    standalone: true,
    imports: [
        CommonModule,
        HeaderImageComponent,
        ProductSelectorComponent,
        IngredientCardComponent,
    ],
    templateUrl: './menu-composition.component.html',
    styleUrl: './menu-composition.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCompositionComponent {
    route = inject(ActivatedRoute);
    menuService = inject(MenuService);
    Menu = Menu;

    readonly menu: Signal<Menu>;

    menuName = this.route.snapshot.queryParams['menuName'];

    constructor() {
        this.menu = signal(this.menuService.getMenu(this.menuName));
    }
}
