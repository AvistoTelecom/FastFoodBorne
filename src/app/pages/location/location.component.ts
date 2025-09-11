import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { RouterModule } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { DessertModalComponent } from '../../modal/dessert-modal/dessert-modal.component';
import { ItemSelectionComponent } from '../../core/components/item-selection/item-selection.component';

@Component({
    selector: 'app-location',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        HeaderImageComponent,
        ItemSelectionComponent,
    ],
    templateUrl: './location.component.html',
    styleUrl: './location.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
    dialog = inject(Dialog);
    openModal() {
        this.dialog.open(DessertModalComponent);
    }
}
