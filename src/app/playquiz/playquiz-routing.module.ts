import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayquizComponent } from './playquiz.component';

const routes: Routes = [
  {
    path: '', component: PlayquizComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayquizRoutingModule { }
