import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MatCard } from '@angular/material/card';
import { Subscription } from 'rxjs';
import { MOCK_QUIZ } from '../interface/testing/mock-quiz';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-playquiz',
  standalone: true,
  imports: [ RouterModule, CommonModule, SidenavComponent, MatCard ],
  templateUrl: './playquiz.component.html',
  styleUrl: './playquiz.component.scss'
})
export class PlayquizComponent implements OnInit {
  quiz = this.pullQuiz();

  state = 0;
  current_numb = 0;
  total_numb = this.quiz.questions.length;
  score = 0;
  timerstart = this.getMilliseconds();

  shouldConfirmExit: boolean = true;
  routerSubscription: Subscription;

  getMilliseconds(){
    return Math.floor(Date.now() / 1000);
  }

  pullQuiz(): any {
    const filledQuizzes = [...MOCK_QUIZ];
    return filledQuizzes[0];
  }

  getProgressWidth(): string {
    return `${(100 / this.total_numb) * (this.current_numb + 1)}%`;
  }

  selectAnswer(selection: number) {
    if( this.state == 0 ){
      this.state = 1;
      this.calculatePoints(selection);
      this.startCountdown( 2000 );
    }
  }

  verifyAnswer(selection: number){
    if(selection == this.quiz.correct_answers[ this.current_numb ]){
      return true;
    }else{
      return false;
    }
  }

  calculatePoints(selection: number){
    if( this.verifyAnswer(selection) ){
      const timernow = this.getMilliseconds();

      if( timernow - this.timerstart <= 10 ){
        // Se demorar menos de 10 segundos o score será máximo
        this.scoreService.setScore(this.scoreService.getScore() + 200);
        
      }else if( timernow - this.timerstart > 48 ){
        // Após 48 segundos, o score atingirá seu limite mínimo de 10 pontos
        this.scoreService.setScore(10);

      }else{
        // Para cada segundo acima de 10, 5 pontos são reduzidos do score, com um mínimo de 10 pontos pela resposta
        const newScore = ( 250 - (timernow - this.timerstart) * 5 );
        this.scoreService.setScore(this.scoreService.getScore() + newScore);
      }
    }
  }

  startCountdown( countdownDuration: number ) {
    setTimeout(() => {
      if( this.current_numb + 1 < this.quiz.questions.length ){
        this.current_numb++;
        this.state = 0;

      }else{
        this.state = 3;
        this.allowNavigation();
        this.scoreService.setQuizCompleted(true);
        this.router.navigate(['/results']);

      }

      this.timerstart = this.getMilliseconds();
      // console.log(this.score);
    }, countdownDuration);
  }

  getButtonColor(selection:number): any {
    if( this.state == 0 ){
      switch(selection){
        case 0:
          return "#FFB84C";

        case 1:
          return "#F266AB";

        case 2:
          return "#2CD3E1";

        case 3:
          return "#A459D1";
      }
    }else{
      if( this.verifyAnswer(selection) ){
        return "#7BFF4C";
      }else{
        return "#F26666";
      }
    }
  }

  constructor(private router: Router, private scoreService: ScoreService) {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.shouldConfirmExit && !confirm('Tem certeza que quer sair? Suas respostas não serão salvas!')) {
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

  ngOnInit(){
    this.scoreService.resetScore();
    console.log("QUIZ INICADO");
  }
}
