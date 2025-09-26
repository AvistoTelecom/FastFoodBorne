import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-menu-composition',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './menu-composition.component.html',
    styleUrl: './menu-composition.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCompositionComponent {}
