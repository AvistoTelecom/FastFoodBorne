import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    output,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-selection-footer',
    standalone: true,
    imports: [],
    templateUrl: './selection-footer.component.html',
    styleUrl: './selection-footer.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectionFooterComponent {
    router = inject(Router);
    isConfirmDisabled = input<boolean>(false);
    confirmed = output();

    onConfirm(): void {
        this.confirmed.emit();
    }

    onCancel(): void {
        this.router.navigate(['/home']);
    }
}
