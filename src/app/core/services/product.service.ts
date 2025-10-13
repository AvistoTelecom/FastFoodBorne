import { inject, Injectable } from '@angular/core';
import { ProductConfigService } from '../config/product/product-config.service';
import { IngredientService } from './ingredient.service';
import { Product } from '../models/product.class';
import { ProductConfig } from '../config/product/model';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    productConfigService = inject(ProductConfigService);
    ingredientService = inject(IngredientService);

    getProduct(name: string, isSupplementAvailable: boolean): Product {
        const productConfig = this.productConfigService.getProductByName(name);
        const ingredientList =
            this.ingredientService.getIngredientListByQuantifiedList(
                productConfig.ingredientNameList,
            );
        const supplementList = isSupplementAvailable
            ? this.ingredientService.getSupplementList()
            : [];
        return new Product(productConfig, ingredientList, supplementList);
    }

    getSideProductList(): Product[] {
        const sideProductConfigList =
            this.productConfigService.getProductByType('side');
        return this.formatProductConfigList(sideProductConfigList, false);
    }

    getDrinkProductList(): Product[] {
        const drinkProductConfigList =
            this.productConfigService.getProductByType('drink');
        return this.formatProductConfigList(drinkProductConfigList, false);
    }

    getDessertList(): Product[] {
        const dessertProductConfigList =
            this.productConfigService.getProductByType('dessert');
        return this.formatProductConfigList(dessertProductConfigList, false);
    }

    private formatProductConfigList(
        productConfigList: ProductConfig[],
        isSupplementAvailable: boolean,
    ): Product[] {
        return productConfigList.map((productConfig) => {
            const ingredientList =
                this.ingredientService.getIngredientListByQuantifiedList(
                    productConfig.ingredientNameList,
                );
            const supplementList = isSupplementAvailable
                ? this.ingredientService.getSupplementList()
                : [];
            return new Product(productConfig, ingredientList, supplementList);
        });
    }
}
