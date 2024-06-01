import { Component } from '@angular/core';
import { MOCK_QUIZ } from '../interface/testing/mock-quiz';
import { RouterModule } from '@angular/router';
import { PurplecardComponent } from '../commons/purplecard/purplecard.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SearchHeaderComponent } from '../commons/search-header/search-header.component';

@Component({
  selector: 'app-search-by-category',
  standalone: true,
  imports: [ RouterModule, PurplecardComponent, SidenavComponent, SearchHeaderComponent ],
  templateUrl: './search-by-category.component.html',
  styleUrl: './search-by-category.component.scss'
})
export class SearchByCategoryComponent {
  category = "Teste";
  quizzes = this.fillQuizzes();

  fillQuizzes(): any[] {
    const filledQuizzes = [...MOCK_QUIZ];

    while (filledQuizzes.length < 10) {
      filledQuizzes.push({
        name: "Quiz Exemplo",
        image: "../../../assets/images/quizimg_placeholder.jpg",
        description: "Exemplo",
        questions: [],
        answers: [],
        correct_answers: [],
        times_played: 0,
        ranked_players: 0,
        favorites: 0,
        category: "Teste",
        tags: ["#Teste"],
        top_scores: [],
      });
    }

    console.log(filledQuizzes);

    return filledQuizzes.slice(0,10);
  }
}
