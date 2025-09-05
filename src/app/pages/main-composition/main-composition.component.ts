import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-composition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-composition.component.html',
  styleUrl: './main-composition.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainCompositionComponent {}
