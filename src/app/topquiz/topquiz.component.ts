import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PurplecardComponent } from '../commons/purplecard/purplecard.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { MOCK_QUIZ } from '../interface/testing/mock-quiz';

@Component({
  selector: 'app-topquiz',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, RouterModule, PurplecardComponent, CommonModule, SidenavComponent],
  templateUrl: './topquiz.component.html',
  styleUrl: './topquiz.component.scss'
})
export class TopquizComponent {
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