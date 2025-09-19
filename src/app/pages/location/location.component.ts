import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';

@Component({
    selector: 'app-location',
    standalone: true,
    imports: [CommonModule, RouterModule, HeaderImageComponent],
    templateUrl: './location.component.html',
    styleUrl: './location.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {}
