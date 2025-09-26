import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../core/services/menu.service';
import { Menu } from '../../core/models/menu.type';
import { HeaderImageComponent } from '../../core/components/header-image/header-image.component';
import { ProductSelectorComponent } from '../../core/components/product-selector/product-selector.component';

@Component({
    selector: 'app-main-composition',
    standalone: true,
    imports: [CommonModule, HeaderImageComponent, ProductSelectorComponent],
    templateUrl: './main-composition.component.html',
    styleUrl: './main-composition.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainCompositionComponent implements OnInit {
    route = inject(ActivatedRoute);
    readonly menuService = inject(MenuService);
    menuName = this.route.snapshot.queryParams['menuName'];
    menu = computed<Menu>(() => this.menuService.getMenuByName(this.menuName));

    ngOnInit(): void {
        console.log(this.menu());
    }
}
