import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-splash-screen',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './splash-screen.component.html',
    styleUrl: './splash-screen.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplashScreenComponent {}
