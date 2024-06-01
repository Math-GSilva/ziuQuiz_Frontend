import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Category } from '../../interface/category';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categorycard',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './categorycard.component.html',
  styleUrl: './categorycard.component.scss'
})
export class CategorycardComponent {
  @Input() category!: Category;
}
