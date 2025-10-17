import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { SmallButtonComponent } from '../../core/components/small-button/small-button.component';
import { OptionButtonComponent } from '../../core/components/option-button/option-button.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-payment',
    standalone: true,
    imports: [
        CommonModule,
        HeaderImageComponent,
        SmallButtonComponent,
        OptionButtonComponent,
    ],
    templateUrl: './payment.component.html',
    styleUrl: './payment.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent {
    router = inject(Router);

    toMenu(): void {
        this.router.navigate(['/home']);
    }

    toBill(): void {
        this.router.navigate(['/bill']);
    }
}
