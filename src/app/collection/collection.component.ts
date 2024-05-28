import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SearchHeaderComponent } from '../commons/search-header/search-header.component';
import { MOCK_QUIZ } from '../interface/testing/mock-quiz';
import { ColectioncardComponent } from '../commons/colectioncard/colectioncard.component';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [ SidenavComponent, SearchHeaderComponent, ColectioncardComponent ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent {
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
