import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizCreationComponent } from './quiz-creation.component';

const routes: Routes = [
  {
    path: '', component: QuizCreationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizCreationRoutingModule { }
