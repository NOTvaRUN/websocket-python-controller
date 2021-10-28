import { LongPressModule } from './../long-press.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EverythingComponent } from './everything.component';
import { LongPress } from '../long-press';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LongPressModule],
  declarations: [EverythingComponent],
  exports: [EverythingComponent]
})
export class EverythingModule { }
