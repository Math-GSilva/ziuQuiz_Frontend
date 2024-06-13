import { Component, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { QuizCreationMainComponent } from './quiz-creation-main/quiz-creation-main.component';
import { FormsModule } from '@angular/forms';
import { QuizCreationListComponent } from './quiz-creation-list/quiz-creation-list.component';
import { QuizCreationQuestionComponent } from './quiz-creation-question/quiz-creation-question.component';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-creation',
  standalone: true,
  imports: [ RouterModule, SidenavComponent, QuizCreationMainComponent, FormsModule, QuizCreationListComponent, QuizCreationQuestionComponent ],
  templateUrl: './quiz-creation.component.html',
  styleUrl: './quiz-creation.component.scss'
})
export class QuizCreationComponent {
  screen = 0;
  question_edit = 0;

  shouldConfirmExit: boolean = true;
  routerSubscription: Subscription;

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
    console.log(this.quiz) // <------------------------------

    if(
      this.quiz.name === "" ||
      // this.quiz.image === "" ||
      this.quiz.description === "" ||
      this.quiz.questions.length === 0 ||
      this.quiz.answers.length === 0 ||
      this.quiz.correct_answers.length === 0 ||
      this.quiz.category === "" ||
      this.quiz.tags.length === 0
    ){
      this.dialog.open(DialogQuizBlank, { panelClass: 'dialog-panel-style' });
    }else{
      const dialogRef = this.dialog.open(DialogQuizPublish, { panelClass: 'dialog-panel-style' });

      dialogRef.afterClosed().subscribe(result => {
        if( result == 0 ){
          // Código de publicação
        }
      });
    }
  }

  excludeButton(){
    const dialogRef = this.dialog.open(DialogQuizDelete, { panelClass: 'dialog-panel-style' });

    dialogRef.afterClosed().subscribe(result => {
      if( result == 0 ){
        // Código de exclusão
      }
    });
  }

  saveButton(){
    const dialogRef = this.dialog.open(DialogQuizSave, { panelClass: 'dialog-panel-style' });

    dialogRef.afterClosed().subscribe(result => {
      if( result == 0 ){
        // Código de salvamento
      }
    });
  }

  editQuestion(numb: number) {
    this.question_edit = numb;
    this.goToScreen(2);
    console.log(this.question_edit);
  }

  constructor(private router: Router, private _location: Location, public dialog: MatDialog) {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.shouldConfirmExit && !confirm('Tem certeza que quer sair? As alterações não serão salvas!')) {
          this.router.navigateByUrl(this.router.url);
        }
      }
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (this.shouldConfirmExit) {
      $event.returnValue = true;
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  allowNavigation() {
    this.shouldConfirmExit = false;
  }

  backClicked() {
    this._location.back();
  }
}


@Component({
  selector: 'dialog-quiz-publish',
  templateUrl: 'dialog-quiz-publish.html',
  standalone: true,
  imports: [ MatDialogModule ],
})
export class DialogQuizPublish {}

@Component({
  selector: 'dialog-quiz-blank',
  templateUrl: 'dialog-quiz-blank.html',
  standalone: true,
  imports: [ MatDialogModule ],
})
export class DialogQuizBlank {}

@Component({
  selector: 'dialog-quiz-delete',
  templateUrl: 'dialog-quiz-delete.html',
  standalone: true,
  imports: [ MatDialogModule ],
})
export class DialogQuizDelete {}

@Component({
  selector: 'dialog-quiz-save',
  templateUrl: 'dialog-quiz-save.html',
  standalone: true,
  imports: [ MatDialogModule ],
})
export class DialogQuizSave {}