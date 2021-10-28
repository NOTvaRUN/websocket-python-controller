import { KeyboardComponent } from './keyboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [KeyboardComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [KeyboardComponent]
})
export class KeyboardModule { }
