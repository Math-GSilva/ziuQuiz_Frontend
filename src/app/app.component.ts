import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonCompModule } from './common-comp/common-comp.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonCompModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ziuQuiz_Frontend';
  textButtonJogar = "Jogar";
}
