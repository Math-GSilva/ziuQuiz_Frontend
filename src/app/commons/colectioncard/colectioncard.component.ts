import { Component, Input } from '@angular/core';
import { Quiz } from '../../interface/quiz';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colectioncard',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './colectioncard.component.html',
  styleUrl: './colectioncard.component.scss'
})
export class ColectioncardComponent {
  @Input() quiz!: Quiz;
}
