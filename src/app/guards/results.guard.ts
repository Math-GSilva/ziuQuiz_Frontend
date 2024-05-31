import { Injectable, inject } from '@angular/core';
import {  CanActivateFn, Router } from '@angular/router';
import { ScoreService } from '../services/score.service';

export const ResultsGuard: CanActivateFn = () => {
  if (inject(ScoreService).isQuizCompleted()) {
    return true;
  } else {
    inject(Router).navigate(['/homepage']);
    return false;
  }
};