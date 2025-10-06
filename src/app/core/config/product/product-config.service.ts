import { inject, Injectable } from '@angular/core';
import { ProductList } from './productList';
import { CategoryConfigService } from '../category/category-config.service';
import { ProductConfig } from './model';
import { IngredientConfigService } from '../ingredient/ingredient-config.service';

@Injectable({
    providedIn: 'root',
})
export class ProductConfigService {
    categoryService = inject(CategoryConfigService);
    ingredientService = inject(IngredientConfigService);
    private readonly _productList = ProductList;

    get productList(): ProductConfig[] {
        return this._productList.map((product) => ({
            ...product,
            image: this.formatImagePath(product.image),
        }));
    }

    getAllProductFromCategory(categoryName: string): ProductConfig[] {
        return this.productList.filter((product) =>
            this.categoryService
                .getByName(categoryName)
                .productNameList.includes(product.name),
        );
    }

    getProductByName(name: string): ProductConfig {
        const product = this.productList.find(
            (product) => product.name === name,
        );
        if (!product) throw new Error('Product not found by name');
        return product;
    }

    private formatImagePath(url: string) {
        return `assets/product/${url}`;
    }
}
