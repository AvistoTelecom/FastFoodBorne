import {
    ChangeDetectionStrategy,
    Component,
    input,
    output,
} from '@angular/core';

@Component({
    selector: 'app-option-button',
    imports: [],
    templateUrl: './option-button.component.html',
    styleUrl: './option-button.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionButtonComponent {
    image = input.required<string>();
    label = input.required<string>();
    locationSelection = output<void>();

    onLocationSelect(): void {
        this.locationSelection.emit();
    }
}
