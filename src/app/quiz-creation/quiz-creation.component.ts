import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { QuizCreationMainComponent } from './quiz-creation-main/quiz-creation-main.component';
import { FormsModule } from '@angular/forms';
import { QuizCreationListComponent } from './quiz-creation-list/quiz-creation-list.component';
import { QuizCreationQuestionComponent } from './quiz-creation-question/quiz-creation-question.component';

@Component({
  selector: 'app-quiz-creation',
  standalone: true,
  imports: [ RouterModule, SidenavComponent, QuizCreationMainComponent, FormsModule, QuizCreationListComponent, QuizCreationQuestionComponent ],
  templateUrl: './quiz-creation.component.html',
  styleUrl: './quiz-creation.component.scss'
})
export class QuizCreationComponent {
  screen = 1;
  question_edit = 0;

  quiz = {
    name: "",
    image: "",
    description: "",
    questions: ['Pergunta 1?', 'Pergunta 2?', 'Pergunta 3?'],
    answers: [['Resposta 1A', 'Resposta 1B', 'Resposta 1C', 'Resposta 1D'], ['Resposta 2A', 'Resposta 2B', 'Resposta 2C', 'Resposta 2D'], ['Resposta 3A', 'Resposta 3B', 'Resposta 3C', 'Resposta 3D']],
    correct_answers: [ 1, 3, 2 ],
    times_played: 0,
    ranked_players: 0,
    favorites: 0,
    category: "",
    tags: [""],
    top_scores: [],
  };

  goToScreen(numb: number){
    this.screen = numb;
  }

  publishButton(){
    console.log(this.quiz)
  }

  editQuestion(numb: number) {
    this.question_edit = numb;
    this.goToScreen(2);
    console.log(this.question_edit);
  }
}
