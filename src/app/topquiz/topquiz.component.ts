import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topquiz',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './topquiz.component.html',
  styleUrl: './topquiz.component.scss'
})
export class TopquizComponent {
  
}
