import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PurplecardComponent } from '../commons/purplecard/purplecard.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MOCK_QUIZ } from '../interface/testing/mock-quiz';
import { SearchHeaderComponent } from '../commons/search-header/search-header.component';

@Component({
  selector: 'app-foryou',
  standalone: true,
  imports: [ RouterModule, PurplecardComponent, SidenavComponent, SearchHeaderComponent ],
  templateUrl: './foryou.component.html',
  styleUrl: './foryou.component.scss'
})
export class ForyouComponent {
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
