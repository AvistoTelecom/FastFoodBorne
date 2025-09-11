import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

@Component({
    selector: 'app-dessert-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dessert-modal.component.html',
    styleUrl: './dessert-modal.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DessertModalComponent {
    readonly dialog = inject(Dialog);
    dessertList = [
        {
            image: 'Salade-fruits.webp',
            name: 'Salade de fruits',
            price: 3,
            type: 'side',
            composition: {},
        },
        {
            image: 'Muffin.webp',
            name: 'Muffin',
            price: 3,
            type: 'side',
            composition: {},
        },
        {
            image: 'Glace.webp',
            name: 'Glace',
            price: 3,
            type: 'side',
            composition: {},
        },
        {
            image: 'Cookie.webp',
            name: 'Cookie',
            price: 2,
            type: 'side',
            composition: {},
        },
    ];
}
