import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MenuService } from '../../core/services/menu.service';
import { ModalProductComponent } from '../../core/components/modal-product/modal-product.component';

@Component({
    selector: 'app-dessert-modal',
    standalone: true,
    imports: [CommonModule, ModalProductComponent],
    templateUrl: './dessert-modal.component.html',
    styleUrl: './dessert-modal.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DessertModalComponent {
    readonly menuService = new MenuService();

    selected = signal(false);
    dessertList = this.menuService.getDessertList();

    onSelection(isSelected: boolean) {
        this.selected.set(isSelected);
    }

    onCancel() {
        return;
    }

    onValidate() {
        return;
    }
}
