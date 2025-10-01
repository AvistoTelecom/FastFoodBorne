import { inject, Injectable } from '@angular/core';
import { CategoryConfigService } from '../category/category-config.service';
import { MenuList } from './menuList';

@Injectable({
    providedIn: 'root',
})
export class MenuConfigService {
    categoryService = inject(CategoryConfigService);
    private readonly menuList = MenuList;

    getAllMenuFromCategory(categoryName: string) {
        console.log(this.menuList);
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

    private formatImagePath(url: string) {
        return `assets/menu/${url}`;
    }
}
