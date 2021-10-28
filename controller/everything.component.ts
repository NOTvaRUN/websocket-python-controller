import { DataService } from './../services/data.service';
/* eslint-disable @typescript-eslint/member-ordering */
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.scss'],
})
export class EverythingComponent implements OnInit {
  longPress = 'first state';
  longPressing = 0;
  isLongPressed = false;

  constructor(public data: DataService) { }

  // public keyOrder = [
  //   'left',
  //   'up',
  //   'down',
  //   'right',
  // ]
  public keycodes;
  ngOnInit() {
    this.keycodes = this.data.main.everything;
  }

  trigger(a){
    this.data.send(a);
  }

  triggerr(e){
    console.log(e);
  }
  onRightClick(event) {
    event.preventDefault();
  }

  onLongPressing(a) {
    this.data.send(a);
  }
}
