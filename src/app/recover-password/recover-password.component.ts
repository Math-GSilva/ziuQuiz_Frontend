import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss'
})
export class RecoverPasswordComponent {

}
