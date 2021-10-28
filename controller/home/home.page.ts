import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  public search: any;
  public keys;

  constructor(private data: DataService) {
    this.keys = this.getkeyCodes();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
    this.data.initializeConnection();
  }
  getkeyCodes() {
    return this.data.getkeyCodes();
  }

  searchMe(){
    console.log(this.search);
  }

}
