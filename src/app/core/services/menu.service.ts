import { Injectable } from '@angular/core';
import productList from '../../../assets/json/productList.json';
import { Category } from '../models/category.type';
import { Ingredient } from '../models/ingredient.type';
import { Menu } from '../models/menu.type';
import { Product } from '../models/product.type';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    getCategoryList(): Category[] {
        return productList.category.map((category) => ({ meta: category }));
    }
    getProductList(): Product[] {
        return productList.product.map((product) => {
            return new Product(product);
        });
    }
    getProductListOfACategory(category: Category): Product[] {
        return this.getProductList().filter((product) =>
            category.meta.productNameList.includes(product.meta.name),
        );
    }

    getProductByName(name: string): Product {
        const productMeta = productList.product.find(
            (product) => product.name === name,
        );
        if (!productMeta) {
            throw new Error(`Product ${name} not found`);
        }
        return new Product(productMeta);
    }

    getMenuListOfACategory(category: Category): Menu[] {
        return productList.menu
            .filter((menu) => category.meta.menuNameList.includes(menu.name))
            .map((menu) => {
                return new Menu(
                    menu,
                    this.getProductByName(menu.composition.main),
                );
            });
    }

    getIngredientByName(name: string): Ingredient {
        const ingredient = productList.ingredient.find(
            (ingredient) => ingredient.name === name,
        );
        if (!ingredient) {
            throw new Error(`Ingredient ${name} not found`);
        }
        return { meta: ingredient };
    }

    getDessertList(): Product[] {
        const dessertCategory = this.getSpecificCategory('Dessert');
        return this.getProductListOfACategory(dessertCategory);
    }

    getSpecificCategory(categoryName: string): Category {
        const category = this.getCategoryList().find(
            (category) => category.meta.name === categoryName,
        );
        if (!category) {
            throw new Error(`Category ${categoryName} not found`);
        }
        return category;
    }
}
