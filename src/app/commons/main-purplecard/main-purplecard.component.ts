import { Component, Input } from '@angular/core';
import { Quiz } from '../../interface/quiz';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-purplecard',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './main-purplecard.component.html',
  styleUrl: './main-purplecard.component.scss'
})
export class MainPurplecardComponent {
  @Input() quiz!: Quiz;
}
