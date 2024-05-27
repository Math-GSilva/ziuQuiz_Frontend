import { Component, Input } from '@angular/core';
import { Quiz } from '../../interface/quiz';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favoritecard',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './favoritecard.component.html',
  styleUrl: './favoritecard.component.scss'
})
export class FavoritecardComponent {
  @Input() quiz!: Quiz;
}
