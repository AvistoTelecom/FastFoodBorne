import {
    ChangeDetectionStrategy,
    Component,
    input,
    output,
} from '@angular/core';
import { Level } from '../../models/color';

@Component({
    selector: 'app-small-button',
    imports: [],
    templateUrl: './small-button.component.html',
    styleUrl: './small-button.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallButtonComponent {
    label = input.required();
    level = input.required<Level>();
    clicked = output<void>();

    onClick() {
        this.clicked.emit();
    }
}
