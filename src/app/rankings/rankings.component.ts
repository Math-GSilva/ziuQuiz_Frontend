import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SearchHeaderComponent } from '../commons/search-header/search-header.component';
import { FavoritecardComponent } from '../commons/favoritecard/favoritecard.component';
import { MOCK_QUIZ } from '../interface/testing/mock-quiz';
import { MOCK_TROPHIES } from '../interface/testing/mock-trophies';
import { RankcardComponent } from '../commons/rankcard/rankcard.component';

@Component({
  selector: 'app-rankings',
  standalone: true,
  imports: [ SidenavComponent, SearchHeaderComponent, FavoritecardComponent, RankcardComponent ],
  templateUrl: './rankings.component.html',
  styleUrl: './rankings.component.scss'
})
export class RankingsComponent {
  quizzes = this.fillQuizzes();
  trophies = this.fillTrophies();
  
  fillQuizzes(): any[] {
    const filledQuizzes = [...MOCK_QUIZ];

    while (filledQuizzes.length < 10) {
      filledQuizzes.push({
        name: "",
        image: "",
        description: "",
        questions: [],
        answers: [],
        correct_answers: [],
        times_played: 0,
        ranked_players: 0,
        favorites: 0,
        category: "",
        tags: [],
        top_scores: [],
      });
    }
    
    return filledQuizzes.slice(0, 10);
  }

  fillTrophies(): any[]{
    const filledTrophies = [...MOCK_TROPHIES];

    while (filledTrophies.length < 10) {
      filledTrophies.push({
        rank: 0,
        quiz: "",
      });
    }

    console.log(filledTrophies);

    return filledTrophies.slice(0, 10);
  }
}
