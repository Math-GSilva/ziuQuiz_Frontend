import { Component } from '@angular/core';
import { UserpageProfileComponent } from './userpage-gridcomps/userpage-profile/userpage-profile.component';
import { UserpageClickablesComponent } from './userpage-gridcomps/userpage-clickables/userpage-clickables.component';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-userpage',
  standalone: true,
  imports: [ UserpageProfileComponent, UserpageClickablesComponent, SidenavComponent ],
  templateUrl: './userpage.component.html',
  styleUrl: './userpage.component.scss'
})
export class UserpageComponent {

}
