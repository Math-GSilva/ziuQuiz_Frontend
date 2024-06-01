import { Component, Input } from '@angular/core';
import { Quiz } from '../../interface/quiz';
import { Trophy } from '../../interface/trophy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rankcard',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './rankcard.component.html',
  styleUrl: './rankcard.component.scss'
})
export class RankcardComponent {
  @Input() quiz!: Quiz;
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
