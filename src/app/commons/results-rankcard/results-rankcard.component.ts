import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Score } from '../../interface/score';

@Component({
  selector: 'app-results-rankcard',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './results-rankcard.component.html',
  styleUrl: './results-rankcard.component.scss'
})
export class ResultsRankcardComponent {
  @Input() index!: number;
  @Input() score!: Score;

  getOpacity(){
    // console.log(100 - ( 100 / 5 ) * this.index);
    return `${Math.floor( 100 - ( ( 100 / 5 ) * this.index ) )}%`;
  }

  
}
