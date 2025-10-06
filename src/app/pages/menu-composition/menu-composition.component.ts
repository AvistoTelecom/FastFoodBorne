import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
    Signal,
} from '@angular/core';
import { ProductConfigService } from '../../core/config/product/product-config.service';
import { Product } from '../../core/models/product.class';
import { Ingredient } from '../../core/models/ingredient.class';
import { ActivatedRoute } from '@angular/router';
import { MenuConfigService } from '../../core/config/menu/menu-config.service';
import { IngredientConfigService } from '../../core/config/ingredient/ingredient-config.service';
import { Menu } from '../../core/models/menu.class';

@Component({
    selector: 'app-menu-composition',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './menu-composition.component.html',
    styleUrl: './menu-composition.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCompositionComponent {
    route = inject(ActivatedRoute);
    productService = inject(ProductConfigService);
    menuService = inject(MenuConfigService);
    ingredientService = inject(IngredientConfigService);

    menu: Signal<Menu>;

    menuName = this.route.snapshot.queryParams['menuName'];

    constructor() {
        const menuConfig = this.menuService.getMenuByName(this.menuName);

        const mainProductConfig = this.productService.getProductByName(
            menuConfig.composition.main,
        );

        const mainIngredientConfigList =
            mainProductConfig.ingredientNameList.map((ingredient) => ({
                ingredientConfig: this.ingredientService.getIngredientByName(
                    ingredient.name,
                ),
                quantity: ingredient.quantity,
            }));
        const mainIngredientList: Ingredient[] = mainIngredientConfigList.map(
            ({ ingredientConfig, quantity }) =>
                new Ingredient(ingredientConfig, quantity),
        );

        const mainProduct = new Product(mainProductConfig, mainIngredientList);

        this.menu = signal(new Menu(menuConfig, mainProduct));
    }

    onClick(ingredient: Ingredient) {
        ingredient.addQuantity();
        console.log(this.menu());
    }
}
