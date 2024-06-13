import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quiz } from '../../interface/quiz';
import { CreationQuestioncardComponent } from '../../commons/creation-questioncard/creation-questioncard.component';

@Component({
  selector: 'app-quiz-creation-list',
  standalone: true,
  imports: [ CreationQuestioncardComponent ],
  templateUrl: './quiz-creation-list.component.html',
  styleUrl: './quiz-creation-list.component.scss'
})
export class QuizCreationListComponent {
  @Input() quiz!: Quiz;
  @Output() screenChange = new EventEmitter<number>();
  @Output() editQuestion = new EventEmitter<number>();

  goToScreen(numb: number){
    this.screenChange.emit(numb);
  }

  handleEditQuestion(numb: number) {
    this.editQuestion.emit(numb);
  }

  addQuestion(){
    this.quiz.questions.push('');
    this.quiz.answers.push(['', '', '', '']);
    this.quiz.correct_answers.push(-1);

    this.handleEditQuestion(this.quiz.questions.length - 1);
  }
}
