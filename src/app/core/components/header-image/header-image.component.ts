import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
} from '@angular/core';

@Component({
    selector: 'app-header-image',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header-image.component.html',
    styleUrl: './header-image.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderImageComponent {
    withPub = input<boolean>(false);

    baniereUrl = computed(() => {
        const baseUrl = 'assets/global/';
        if (this.withPub()) {
            return `${baseUrl}Banniere-Logo-Pub.webp`;
        }
        return `${baseUrl}Banniere-Logo.webp`;
    });
}
