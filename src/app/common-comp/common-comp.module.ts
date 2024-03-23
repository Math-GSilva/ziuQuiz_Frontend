import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonButtonComponent } from './common-button/common-button.component';
import { CommonTextfieldComponent } from './common-textfield/common-textfield.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, CommonButtonComponent, CommonTextfieldComponent
  ],
  exports: [
    CommonButtonComponent, CommonTextfieldComponent
  ]
})
export class CommonCompModule { }
