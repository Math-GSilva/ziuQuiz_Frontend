import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../interface/question';
import { Quiz } from '../../interface/quiz';

@Component({
  selector: 'app-creation-questioncard',
  standalone: true,
  imports: [],
  templateUrl: './creation-questioncard.component.html',
  styleUrl: './creation-questioncard.component.scss'
})
export class CreationQuestioncardComponent {
  @Input() question!: Question;
  @Input() question_number!: number;
  @Output() editQuestionEvent = new EventEmitter<number>();

  editQuestion(){
    this.editQuestionEvent.emit(this.question_number);
  }
}
