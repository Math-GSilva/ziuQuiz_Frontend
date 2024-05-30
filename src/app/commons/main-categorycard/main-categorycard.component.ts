import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Category } from '../../interface/category';

@Component({
  selector: 'app-main-categorycard',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './main-categorycard.component.html',
  styleUrl: './main-categorycard.component.scss'
})
export class MainCategorycardComponent {
  @Input() category!: Category;
}
