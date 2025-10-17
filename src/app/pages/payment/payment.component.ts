import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { SmallButtonComponent } from '../../core/components/small-button/small-button.component';

@Component({
    selector: 'app-payment',
    standalone: true,
    imports: [CommonModule, HeaderImageComponent, SmallButtonComponent],
    templateUrl: './payment.component.html',
    styleUrl: './payment.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent {
    toMenu(): void {
        return;
    }

    toBill(): void {
        return;
    }
}
