import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { Dialog } from '@angular/cdk/dialog';
import { ModalEndingComponent } from '../../modal/modal-ending/modal-ending.component';

@Component({
    selector: 'app-bills',
    standalone: true,
    imports: [CommonModule, HeaderImageComponent, LottieComponent],
    templateUrl: './bills.component.html',
    styleUrl: './bills.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillsComponent {
    dialog = inject(Dialog);

    constructor() {
        this.dialog.open(ModalEndingComponent);
    }

    lottieOptions: AnimationOptions = {
        path: '/assets/global/PattesChienValide.json',
    };
    getRandomBills(): string {
        return Array.from({ length: 6 }, () =>
            String(Math.floor(Math.random() * 9) + 1),
        ).join('');
    }
}
