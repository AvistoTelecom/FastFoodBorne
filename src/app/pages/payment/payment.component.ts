import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-payment',
    standalone: true,
    imports: [CommonModule, HeaderImageComponent, RouterModule],
    templateUrl: './payment.component.html',
    styleUrl: './payment.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent {}
