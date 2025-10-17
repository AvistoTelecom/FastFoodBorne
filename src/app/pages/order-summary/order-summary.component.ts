import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { SelectionFooterComponent } from '../../core/components/selection-footer/selection-footer.component';
import { OrderService } from '../../core/services/order.service';
import { ProductService } from '../../core/services/product.service';
import { MenuService } from '../../core/services/menu.service';

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
    productService = inject(ProductService);
    menuService = inject(MenuService);

    onConfirm(): void {
        this.router.navigate(['/payment']);
    }

    onModifyMenu(index: number): void {
        this.router.navigate(['/menu-composition'], {
            queryParams: { index: index },
        });
        return;
    }
}
