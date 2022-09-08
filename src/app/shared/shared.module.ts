import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    IconComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
