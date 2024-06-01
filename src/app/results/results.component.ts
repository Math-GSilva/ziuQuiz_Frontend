import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ScoreService } from '../services/score.service'; 
import { ResultsRankcardComponent } from '../commons/results-rankcard/results-rankcard.component';
import { MOCK_SCORE } from '../interface/testing/mock-scores';
import { MOCK_QUIZ } from '../interface/testing/mock-quiz';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [ SidenavComponent, ResultsRankcardComponent, CommonModule ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  quiz = this.pullQuiz();
  score: number;
  player_rank = 7;
  scores = MOCK_SCORE.slice( 0, 6 );
  player_score = this.pullPlayerRank();

  constructor(private scoreService: ScoreService) {
    this.score = this.scoreService.getScore();
  }

  pullQuiz(): any {
    const filledQuizzes = [...MOCK_QUIZ];
    return filledQuizzes[0];
  }

  pullPlayerRank(): any {
    const filledScores = [...MOCK_SCORE];
    return filledScores[6];
  }
}