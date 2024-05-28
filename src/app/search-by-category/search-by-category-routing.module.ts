import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchByCategoryComponent } from './search-by-category.component';

const routes: Routes = [
  {
    path: '', component: SearchByCategoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchByCategoryRoutingModule { }
