import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MOCK_QUIZ } from '../interface/testing/mock-quiz';
import { MOCK_CATEGORY } from '../interface/testing/mock-categories';
import { CommonModule } from '@angular/common';
import { MainPurplecardComponent } from '../commons/main-purplecard/main-purplecard.component';
import { MainCategorycardComponent } from '../commons/main-categorycard/main-categorycard.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ CommonModule, MatCardModule, MatIconModule, MatButtonModule, RouterModule, SidenavComponent, MainPurplecardComponent, MainCategorycardComponent ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  categories = this.fillCategories();
  bestpicks = [...MOCK_QUIZ].slice(0,5);
  
  fillQuizzes(): any[] {
    const filledQuizzes = [...MOCK_QUIZ];

    while (filledQuizzes.length < 5) {
      filledQuizzes.push({
        name: "",
        image: "",
        description: "",
        questions: [],
        answers: [],
        correct_answers: [],
        times_played: 0,
        ranked_players: 0,
        favorites: 0,
        category: "",
        tags: [],
        top_scores: [],
      });
    }
    
    return filledQuizzes.slice(0, 5);
  }

  fillCategories(): any[] {
    const filledCategories = [...MOCK_CATEGORY];

    while (filledCategories.length < 5) {
      filledCategories.push({
        id: 0,
        name: "",
        image: "../../../assets/images/quizimg_placeholder.jpg",
      });
    }

    console.log(filledCategories);

    return filledCategories.slice(0,5);
  }
}
