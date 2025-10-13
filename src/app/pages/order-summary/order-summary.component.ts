import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { OrderService } from '../../core/services/order.service';
import { MenuService } from '../../core/services/menu.service';
import { ProductService } from '../../core/services/product.service';
import { SelectionFooterComponent } from '../../core/components/selection-footer/selection-footer.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order-summary',
    standalone: true,
    imports: [CommonModule, HeaderImageComponent, SelectionFooterComponent],
    templateUrl: './order-summary.component.html',
    styleUrl: './order-summary.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSummaryComponent {
    router = inject(Router);
    orderService = inject(OrderService);
    menuService = inject(MenuService);
    productService = inject(ProductService);

    constructor() {
        const menu = this.menuService.getMenu('Menu Doggo');
        const drink = this.productService.getDrinkProductList()[0];
        const side = this.productService.getSideProductList()[0];
        menu.changeDrink(drink);
        menu.changeSide(side);
        this.orderService.addMenu(menu);
        this.orderService.addMenu(menu);
        this.orderService.addProduct(drink);
        this.orderService.addProduct(side);
    }

    onConfirm(): void {
        this.router.navigate(['/payment']);
    }
}
