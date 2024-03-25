import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonButtonComponent } from './common-button/common-button.component';
import { CommonTextfieldComponent } from './common-textfield/common-textfield.component';
import { CommonBackgroundComponent } from './common-background/common-background.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, CommonButtonComponent, CommonTextfieldComponent, CommonBackgroundComponent
  ],
  exports: [
    CommonButtonComponent, CommonTextfieldComponent, CommonBackgroundComponent
  ]
})
export class CommonCompModule { }
