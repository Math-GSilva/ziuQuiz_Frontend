import { Component, Input } from '@angular/core';
import { Trophy } from '../../interface/trophy';

@Component({
  selector: 'app-profile-rankcard',
  standalone: true,
  imports: [],
  templateUrl: './profile-rankcard.component.html',
  styleUrl: './profile-rankcard.component.scss'
})
export class ProfileRankcardComponent {
  @Input() trophy!: Trophy;

  Medal_Image = "";
  Medal_Container = "";
  Medal_Tint = "";

  ngOnInit() {
    this.Medal_Image = this.defineMedal(this.trophy.rank);
  }

  defineMedal(rank: number): any {
    switch(rank){
      case 1:
        this.Medal_Container = "card-container-gold";
        this.Medal_Tint = "card-tint-gold";
        return "../../../assets/images/MedalGold.png";

      case 2:
        this.Medal_Container = "card-container-silver";
        this.Medal_Tint = "card-tint-silver";
        return "../../../assets/images/MedalSilver.png";

      case 3:
        this.Medal_Container = "card-container-bronze";
        this.Medal_Tint = "card-tint-bronze";
        return "../../../assets/images/MedalBronze.png";
    }
  }
}
