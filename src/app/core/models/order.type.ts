import { Menu } from './menu.type';
import { Product } from './product.type';

export type Order = orderItem[];

export interface orderItem {
    item: Product | Menu;
    quantity: number;
}
