import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizinfoComponent } from './quizinfo.component';

const routes: Routes = [
  {
    path: '', component: QuizinfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizinfoRoutingModule { }
