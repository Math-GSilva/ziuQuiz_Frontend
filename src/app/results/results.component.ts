import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ScoreService } from '../services/score.service'; 

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [ SidenavComponent ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  score: number;

  constructor(private scoreService: ScoreService) {
    this.score = this.scoreService.getScore();
  }
}