import { inject, Injectable } from '@angular/core';
import { ProductList } from './productList';
import { CategoryConfigService } from '../category/category-config.service';
import { ProductConfig } from './model';

@Injectable({
    providedIn: 'root',
})
export class ProductConfigService {
    categoryService = inject(CategoryConfigService);
    private readonly _productList = ProductList;

    get productList(): ProductConfig[] {
        return this.productList.map((product) => ({
            ...product,
            image: this.formatImagePath(product.image),
        }));
    }

    getAllProductFromCategory(categoryName: string) {
        return this._productList
            .filter((product) =>
                this.categoryService
                    .getByName(categoryName)
                    .productNameList.includes(product.name),
            )
            .map((product) => ({
                ...product,
                image: this.formatImagePath(product.image),
            }));
    }

    getProductByName(name: string) {
        const product = this._productList.find(
            (product) => product.name === name,
        );
        if (!product) throw new Error('Product not found by name');
        return product;
    }

    private formatImagePath(url: string) {
        return `assets/product/${url}`;
    }
}
