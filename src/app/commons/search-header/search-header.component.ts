import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-header',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './search-header.component.html',
  styleUrl: './search-header.component.scss'
})
export class SearchHeaderComponent {
  constructor(private _location: Location) 
  {}
  
  backClicked() {
    this._location.back();
  }
}
