import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-textfield',
  standalone: true,
  imports: [],
  templateUrl: './common-textfield.component.html',
  styleUrl: './common-textfield.component.scss'
})
export class CommonTextfieldComponent {
  @Input() texto: string = "";
  @Input() property1: string = "Generic Text Field";
}
