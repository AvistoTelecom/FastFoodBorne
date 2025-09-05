import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-location',
    standalone: true,
    imports: [CommonModule, RouterModule, HeaderImageComponent],
    templateUrl: './location.component.html',
    styleUrl: './location.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {}
