import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PurplecardComponent } from '../commons/purplecard/purplecard.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topquiz',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, RouterModule, PurplecardComponent, CommonModule, SidenavComponent],
  templateUrl: './topquiz.component.html',
  styleUrl: './topquiz.component.scss'
})
export class TopquizComponent implements OnInit{
  quizzes = Array(5).fill(0);
  constructor() {}

  ngOnInit(): void {}
}