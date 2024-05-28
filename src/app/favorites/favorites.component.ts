import { Component } from '@angular/core';
import { MOCK_QUIZ } from '../interface/testing/mock-quiz';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SearchHeaderComponent } from '../commons/search-header/search-header.component';
import { FavoritecardComponent } from '../commons/favoritecard/favoritecard.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [ SidenavComponent, SearchHeaderComponent, FavoritecardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {
  quizzes = this.fillQuizzes();

  fillQuizzes(): any[] {
    const filledQuizzes = [...MOCK_QUIZ];

    while (filledQuizzes.length < 24) {
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

    console.log(filledQuizzes);

    return filledQuizzes.slice(0,24);
  }
}
