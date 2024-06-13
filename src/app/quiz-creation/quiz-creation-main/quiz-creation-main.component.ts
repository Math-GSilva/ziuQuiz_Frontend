import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { Quiz } from '../../interface/quiz';
import { FormsModule } from '@angular/forms';
import { MOCK_PRESET_CATEGORY } from '../../interface/testing/mock-preset-categories';

@Component({
  selector: 'app-quiz-creation-main',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, RouterModule, SidenavComponent, FormsModule],
  templateUrl: './quiz-creation-main.component.html',
  styleUrl: './quiz-creation-main.component.scss'
})
export class QuizCreationMainComponent {
  @Input() quiz!: Quiz;
  @Output() screenChange = new EventEmitter<number>();
  @Output() quizPublish = new EventEmitter<number>();
  @Output() quizDelete = new EventEmitter<number>();
  @Output() quizSave = new EventEmitter<number>();
  @Output() backButton = new EventEmitter<number>();

  preset_categories = MOCK_PRESET_CATEGORY;

  goToScreen(numb: number){
    this.screenChange.emit(numb);
  }

  publishButton(){
    this.quizPublish.emit();
  }

  excludeButton(){
    this.quizDelete.emit();
  }

  saveButton(){
    this.quizSave.emit();
  }

  backClicked(){
    this.backButton.emit();
  }

  formatTags(tags: string) {
    this.quiz.tags = tags.split(' ').map(tag => tag.trim().startsWith('#') ? tag.trim() : '#' + tag.trim());
  }
}
