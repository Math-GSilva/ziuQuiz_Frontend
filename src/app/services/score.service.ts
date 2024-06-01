import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private score: number = 0;
  private quizCompleted: boolean = false;

  setScore(score: number) {
    this.score = score;
  }

  getScore(): number {
    return this.score;
  }

  resetScore() {
    this.score = 0;
  }

  setQuizCompleted(completed: boolean) {
    this.quizCompleted = completed;
  }

  isQuizCompleted(): boolean {
    return this.quizCompleted;
  }
}