import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-item-selection',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './item-selection.component.html',
    styleUrl: './item-selection.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemSelectionComponent {
    readonly image = input.required<string>();
    readonly name = input.required<string>();
    readonly price = input<number>();
}
