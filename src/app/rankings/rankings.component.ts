import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SearchHeaderComponent } from '../commons/search-header/search-header.component';
import { FavoritecardComponent } from '../commons/favoritecard/favoritecard.component';

@Component({
  selector: 'app-rankings',
  standalone: true,
  imports: [ SidenavComponent, SearchHeaderComponent, FavoritecardComponent],
  templateUrl: './rankings.component.html',
  styleUrl: './rankings.component.scss'
})
export class RankingsComponent {

}
