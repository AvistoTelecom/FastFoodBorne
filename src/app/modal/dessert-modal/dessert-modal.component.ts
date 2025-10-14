import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import { ModalProductComponent } from './modal-product/modal-product.component';
import { ProductService } from '../../core/services/product.service';
import { DialogRef } from '@angular/cdk/dialog';
import { Product } from '../../core/value-object/product.class';
import { OrderService } from '../../core/services/order.service';
import { SmallButtonComponent } from '../../core/components/small-button/small-button.component';

@Component({
    selector: 'app-dessert-modal',
    standalone: true,
    imports: [CommonModule, ModalProductComponent, SmallButtonComponent],
    templateUrl: './dessert-modal.component.html',
    styleUrl: './dessert-modal.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DessertModalComponent {
    productService = inject(ProductService);
    dialogRef = inject(DialogRef<string>);
    orderService = inject(OrderService);

    selectedDessertList = signal<Product[]>([]);
    dessertList = this.productService.getDessertList();

    onSelection(selectedDessert: Product) {
        const dessert = this.selectedDessertList().find(
            (product) => product.name === selectedDessert.name,
        );
        if (dessert) {
            this.selectedDessertList.set(
                this.selectedDessertList().filter(
                    (product) => product.name !== selectedDessert.name,
                ),
            );
            return;
        }
        this.selectedDessertList.set([
            ...this.selectedDessertList(),
            selectedDessert,
        ]);
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onValidate(): void {
        this.orderService.addProductList(this.selectedDessertList());
        this.dialogRef.close('confirmed');
    }

    isSelected(dessert: Product): boolean {
        return this.selectedDessertList().some(
            (product) => product.name === dessert.name,
        );
    }
}
