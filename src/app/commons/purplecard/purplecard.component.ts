import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purplecard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purplecard.component.html',
  styleUrl: './purplecard.component.scss'
})
export class PurplecardComponent{
  quizzes = new Array(10);
}