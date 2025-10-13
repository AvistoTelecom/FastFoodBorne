import { inject, Injectable } from '@angular/core';
import { CategoryConfigService } from '../category/category-config.service';
import { MenuList } from './menuList';
import { MenuConfig } from './model';

@Injectable({
    providedIn: 'root',
})
export class MenuConfigService {
    categoryService = inject(CategoryConfigService);
    private readonly menuList = MenuList;

    getAllMenuFromCategory(categoryName: string): MenuConfig[] {
        return this.menuList
            .filter((menu) =>
                this.categoryService
                    .getByName(categoryName)
                    .menuNameList.includes(menu.name),
            )
            .map((menu) => ({
                ...menu,
                image: this.formatImagePath(menu.image),
            }));
    }

    getMenuByName(name: string): MenuConfig {
        const menu = this.menuList.find((menu) => menu.name === name);
        if (!menu) throw new Error('Menu not found by name');
        const formatedMenu = {
            ...menu,
            image: this.formatImagePath(menu.image),
        };
        return formatedMenu;
    }

    private formatImagePath(url: string): string {
        return `assets/menu/${url}`;
    }
}
