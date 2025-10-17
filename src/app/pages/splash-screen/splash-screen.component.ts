import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-splash-screen',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './splash-screen.component.html',
    styleUrl: './splash-screen.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplashScreenComponent {
    router = inject(Router);

    navigate(): void {
        this.router.navigate(['/location']);
    }
}
