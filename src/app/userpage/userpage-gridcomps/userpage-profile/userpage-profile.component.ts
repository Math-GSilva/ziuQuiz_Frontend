import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-userpage-profile',
  standalone: true,
  imports: [ MatIconModule ],
  templateUrl: './userpage-profile.component.html',
  styleUrl: './userpage-profile.component.scss'
})
export class UserpageProfileComponent {
  username = "Nome Usuário";
  quiz_created = "10";
  quiz_completed = "200";
  quiz_favorite = "7";
}
