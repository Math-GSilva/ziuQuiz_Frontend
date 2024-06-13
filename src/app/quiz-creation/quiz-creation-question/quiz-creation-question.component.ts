import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Quiz } from '../../interface/quiz';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-creation-question',
  standalone: true,
  imports: [ CommonModule, FormsModule, MatIcon ],
  templateUrl: './quiz-creation-question.component.html',
  styleUrl: './quiz-creation-question.component.scss'
})
export class QuizCreationQuestionComponent {
  @Input() quiz!: Quiz;
  @Input() question_numb!: number;
  @Output() screenChange = new EventEmitter<number>();

  pergunta: string = '';
  respost1: string = '';
  respost2: string = '';
  respost3: string = '';
  respost4: string = '';
  respcorr: number = -1;

  constructor(private cdr: ChangeDetectorRef, public dialog: MatDialog) {}

  ngOnInit() {
    this.pergunta = this.quiz.questions[this.question_numb];
    this.respost1 = this.quiz.answers[this.question_numb][0];
    this.respost2 = this.quiz.answers[this.question_numb][1];
    this.respost3 = this.quiz.answers[this.question_numb][2];
    this.respost4 = this.quiz.answers[this.question_numb][3];
    this.respcorr = this.quiz.correct_answers[this.question_numb];
  }

  getProgressWidth(): string {
    return `${(100 / this.getTotalNumber()) * (this.question_numb + 1)}%`;
  }

  getTotalNumber(): number {
    return this.quiz.questions.length;
  }

  getIcon( numb: number ): string{
    return numb === this.respcorr ? 'check_box' : 'check_box_outline_blank';
  }

  changeAnswer( numb: number ): void {
    this.respcorr = numb;
    this.cdr.detectChanges();
  }

  deleteQuestion(): void {
    const dialogRef = this.dialog.open(DialogQuizDelete, { panelClass: 'dialog-panel-style' });

    dialogRef.afterClosed().subscribe(result => {
      if( result == 0 ){
        this.quiz.questions.splice(this.question_numb, 1);
        this.quiz.answers.splice(this.question_numb, 1);
        this.quiz.correct_answers.splice(this.question_numb, 1);
        this.screenChange.emit(1);
      }
    });
  }

  alterQuestion(): void {
    if( !this.checkIfBlank(0) ){
      const dialogRef = this.dialog.open(DialogQuizAlter, { panelClass: 'dialog-panel-style' });

      dialogRef.afterClosed().subscribe(result => {
        if( result == 0 ){
          this.quiz.questions[this.question_numb]  = this.pergunta;
          this.quiz.answers[this.question_numb][0] = this.respost1;
          this.quiz.answers[this.question_numb][1] = this.respost2;
          this.quiz.answers[this.question_numb][2] = this.respost3;
          this.quiz.answers[this.question_numb][3] = this.respost4;
          this.quiz.correct_answers[this.question_numb] = this.respcorr;
          this.screenChange.emit(1);
        }
      });
    }else{
      this.dialog.open(DialogQuizBlank, { panelClass: 'dialog-panel-style' });
    }
  }

  cancelChanges(): void {
    if( !this.checkIfBlank(1) ){
      const dialogRef = this.dialog.open(DialogQuizCancel, { panelClass: 'dialog-panel-style' });

      dialogRef.afterClosed().subscribe(result => {
        if( result == 0 ){
          this.screenChange.emit(1);
        }
      });
    }else{
      this.dialog.open(DialogQuizBlank, { panelClass: 'dialog-panel-style' });
    }
  }

  checkIfBlank( mode: number ): boolean {
    console.log(
      this.pergunta,
      this.respost1,
      this.respost2,
      this.respost3,
      this.respost4,
      this.respcorr,
      this.respcorr,

      this.quiz.questions[this.question_numb],
      this.quiz.answers[this.question_numb][0],
      this.quiz.answers[this.question_numb][1],
      this.quiz.answers[this.question_numb][2],
      this.quiz.answers[this.question_numb][3],
      this.quiz.correct_answers[this.question_numb],
      this.quiz.correct_answers[this.question_numb],
    )
    if( mode == 0 ){
      return this.pergunta === "" ||
      this.respost1 === "" ||
      this.respost2 === "" ||
      this.respost3 === "" ||
      this.respost4 === "" ||
      (this.respcorr < 0 || this.respcorr > 3);
    }else if( mode == 1){
      return this.quiz.questions[this.question_numb] === "" ||
      this.quiz.answers[this.question_numb][0] === "" ||
      this.quiz.answers[this.question_numb][1] === "" ||
      this.quiz.answers[this.question_numb][2] === "" ||
      this.quiz.answers[this.question_numb][3] === "" ||
      (this.quiz.correct_answers[this.question_numb] < 0 || this.quiz.correct_answers[this.question_numb] > 3);
    }else{
      return false;
    }
  }
}


@Component({
  selector: 'dialog-quiz-delete',
  templateUrl: 'dialog-quiz-delete.html',
  standalone: true,
  imports: [ MatDialogModule ],
})
export class DialogQuizDelete {}

@Component({
  selector: 'dialog-quiz-alter',
  templateUrl: 'dialog-quiz-alter.html',
  standalone: true,
  imports: [ MatDialogModule ],
})
export class DialogQuizAlter {}

@Component({
  selector: 'dialog-quiz-cancel',
  templateUrl: 'dialog-quiz-cancel.html',
  standalone: true,
  imports: [ MatDialogModule ],
})
export class DialogQuizCancel {}

@Component({
  selector: 'dialog-quiz-blank',
  templateUrl: 'dialog-quiz-blank.html',
  standalone: true,
  imports: [ MatDialogModule ],
})
export class DialogQuizBlank {}