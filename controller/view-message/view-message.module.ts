import { LongPressModule } from './../long-press.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewMessagePage } from './view-message.page';

import { IonicModule } from '@ionic/angular';

import { ViewMessagePageRoutingModule } from './view-message-routing.module';
import { EverythingModule } from '../everything/everything.module';
import { KeyboardModule } from '../keyboard/keyboard.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EverythingModule,
    KeyboardModule,
    ViewMessagePageRoutingModule,
    LongPressModule,
  ],
  declarations: [ViewMessagePage]
})
export class ViewMessagePageModule {}
