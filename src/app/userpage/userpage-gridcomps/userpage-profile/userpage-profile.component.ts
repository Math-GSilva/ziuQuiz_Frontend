import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../../interface/user';
import { CommonModule } from '@angular/common';
import { MOCK_USER } from '../../../interface/testing/mock-user';

@Component({
  selector: 'app-userpage-profile',
  standalone: true,
  imports: [ MatIconModule, CommonModule ],
  templateUrl: './userpage-profile.component.html',
  styleUrl: './userpage-profile.component.scss'
})
export class UserpageProfileComponent {
  user: User = MOCK_USER[0];
}
