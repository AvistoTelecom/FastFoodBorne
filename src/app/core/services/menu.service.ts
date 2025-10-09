import { Injectable, inject } from '@angular/core';
import { MenuConfigService } from '../config/menu/menu-config.service';
import { Menu } from '../models/menu.class';
import { ProductService } from './product.service';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    menuConfigService = inject(MenuConfigService);
    productService = inject(ProductService);

    getMenu(name: string) {
        const menuConfig = this.menuConfigService.getMenuByName(name);
        const mainProduct = this.productService.getProduct(
            menuConfig.composition.main,
        );
        return new Menu(menuConfig, mainProduct);
    }
}
