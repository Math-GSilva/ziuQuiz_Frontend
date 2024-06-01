import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MOCK_CATEGORY } from '../interface/testing/mock-categories';
import { CategorycardComponent } from '../commons/categorycard/categorycard.component';
import { SearchHeaderComponent } from '../commons/search-header/search-header.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ CategorycardComponent, SidenavComponent, SearchHeaderComponent ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})

export class CategoriesComponent {
  categories = this.fillCategories();

  fillCategories(): any[] {
    const filledCategories = [...MOCK_CATEGORY];

    while (filledCategories.length < 24) {
      filledCategories.push({
        id: 0,
        name: "",
        image: "../../../assets/images/quizimg_placeholder.jpg",
      });
    }

    console.log(filledCategories);

    return filledCategories.slice(0,24);
  }
}
