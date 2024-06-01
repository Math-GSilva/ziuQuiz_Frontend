import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quiz } from '../../interface/quiz';

@Component({
  selector: 'app-purplecard',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './purplecard.component.html',
  styleUrl: './purplecard.component.scss'
})
export class PurplecardComponent{
  @Input() quiz!: Quiz;
}