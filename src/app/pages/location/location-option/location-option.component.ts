import {
    ChangeDetectionStrategy,
    Component,
    input,
    output,
} from '@angular/core';

@Component({
    selector: 'app-location-option',
    imports: [],
    templateUrl: './location-option.component.html',
    styleUrl: './location-option.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationOptionComponent {
    image = input.required<string>();
    label = input.required<string>();
    locationSelection = output<void>();

    onLocationSelect(): void {
        this.locationSelection.emit();
    }
}
