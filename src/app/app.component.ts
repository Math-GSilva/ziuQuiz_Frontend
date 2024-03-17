import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InitialComponent } from './initial/initial.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InitialComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ziuQuiz_Frontend';
}
