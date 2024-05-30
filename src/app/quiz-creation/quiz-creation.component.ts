import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-quiz-creation',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, RouterModule, SidenavComponent],
  templateUrl: './quiz-creation.component.html',
  styleUrl: './quiz-creation.component.scss'
})
export class QuizCreationComponent {

}
