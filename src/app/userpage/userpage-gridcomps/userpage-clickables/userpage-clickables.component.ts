import { Component } from '@angular/core';
import { FavoritecardComponent } from '../../../commons/favoritecard/favoritecard.component';
import { MOCK_QUIZ } from '../../../interface/testing/mock-quiz';
import { CommonModule } from '@angular/common';
import { ColectioncardComponent } from '../../../commons/colectioncard/colectioncard.component';
import { MOCK_TROPHIES } from '../../../interface/testing/mock-trophies';
import { ProfileRankcardComponent } from '../../../commons/profile-rankcard/profile-rankcard.component';

@Component({
  selector: 'app-userpage-clickables',
  standalone: true,
  imports: [ CommonModule, FavoritecardComponent, ColectioncardComponent, ProfileRankcardComponent ],
  templateUrl: './userpage-clickables.component.html',
  styleUrl: './userpage-clickables.component.scss'
})
export class UserpageClickablesComponent {
  favquizzes = this.fillQuizzes();
  colquizzes = this.fillQuizzes();
  trophies = this.fillTrophies();
  
  fillQuizzes(): any[] {
    const filledQuizzes = [...MOCK_QUIZ];

    while (filledQuizzes.length < 6) {
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
    
    return filledQuizzes.slice(0, 6);
  }

  fillTrophies(): any[]{
    const filledTrophies = [...MOCK_TROPHIES];

    while (filledTrophies.length < 4) {
      filledTrophies.push({
        rank: 0,
        quiz: "",
      });
    }

    console.log(filledTrophies);

    return filledTrophies.slice(0, 4);
  }
}
