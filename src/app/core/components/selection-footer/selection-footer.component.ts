import {
    ChangeDetectionStrategy,
    Component,
    input,
    output,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-selection-footer',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './selection-footer.component.html',
    styleUrl: './selection-footer.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectionFooterComponent {
    isConfirmDisabled = input<boolean>(false);
    confirmed = output();

    onConfirm() {
        this.confirmed.emit();
    }
}
