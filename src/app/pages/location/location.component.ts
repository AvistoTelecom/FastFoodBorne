import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { OptionButtonComponent } from '../../core/components/option-button/option-button.component';

@Component({
    selector: 'app-location',
    standalone: true,
    imports: [CommonModule, HeaderImageComponent, OptionButtonComponent],
    templateUrl: './location.component.html',
    styleUrl: './location.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
    router = inject(Router);

    onNavigate(): void {
        this.router.navigate(['/home']);
    }
}
