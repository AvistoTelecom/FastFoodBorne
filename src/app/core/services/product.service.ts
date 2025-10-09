import { inject, Injectable } from '@angular/core';
import { ProductConfigService } from '../config/product/product-config.service';
import { IngredientService } from './ingredient.service';
import { Product } from '../models/product.class';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    productConfigService = inject(ProductConfigService);
    ingredientService = inject(IngredientService);

    getProduct(name: string): Product {
        const productConfig = this.productConfigService.getProductByName(name);
        const ingredientList =
            this.ingredientService.getIngredientListByQuantifiedList(
                productConfig.ingredientNameList,
            );
        const supplementList = this.ingredientService.getSupplementList();
        return new Product(productConfig, ingredientList, supplementList);
    }
}
