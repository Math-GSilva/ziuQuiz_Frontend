import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopquizComponent } from './topquiz.component';

const routes: Routes = [
  {
    path: '', component: TopquizComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopquizRoutingModule { }
