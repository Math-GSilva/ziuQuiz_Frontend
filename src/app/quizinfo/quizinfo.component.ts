import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quizinfo',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, RouterModule, SidenavComponent],
  templateUrl: './quizinfo.component.html',
  styleUrl: './quizinfo.component.scss'
})
export class QuizinfoComponent {

}