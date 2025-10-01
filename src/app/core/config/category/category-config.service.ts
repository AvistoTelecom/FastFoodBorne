import { Injectable } from '@angular/core';
import { CategoryList } from './categoryList';

@Injectable({
    providedIn: 'root',
})
export class CategoryConfigService {
    private readonly _categoryList = CategoryList;

    get categoryList() {
        return this._categoryList.map((category) => ({
            ...category,
            image: this.formatImagePath(category.image),
        }));
    }

    getByName(name: string) {
        const category = this._categoryList.find(
            (category) => category.name === name,
        );
        if (!category) throw new Error('unable to find category by name');
        return category;
    }

    private formatImagePath(url: string) {
        return `assets/category/${url}`;
    }
}
