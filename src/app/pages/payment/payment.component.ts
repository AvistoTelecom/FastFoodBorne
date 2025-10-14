import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { Router, RouterModule } from '@angular/router';
import { SmallButtonComponent } from '../../core/components/small-button/small-button.component';

@Component({
    selector: 'app-payment',
    standalone: true,
    imports: [
        CommonModule,
        HeaderImageComponent,
        RouterModule,
        SmallButtonComponent,
    ],
    templateUrl: './payment.component.html',
    styleUrl: './payment.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent {
    readonly router = inject(Router);

    toMenu() {
        this.router.navigate(['/home']);
    }
}
