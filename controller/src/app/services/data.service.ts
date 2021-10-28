import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

// import { Toast } from '@ionic-native/toast/ngx';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public myWebSocket;

  public main: any = {
    keyHoard: [
      {
        url: '/assets/icon/Left arrow.svg',
        text: 'Left arrow',
        active: true,
        description: `This is for everybody`,
        buttons:[
          {
            url: '/assets/icon/Left arrow.svg',
            value: 'left',
            text: 'Left'
          }
        ],
        value: 'left',
        id: 0,
      },
      {
        url: '/assets/icon/Right Arrow.svg',
        text: 'Right arrow',
        id: 1,
        active: true,
        value: 'right',
        buttons:[
          {
            url: '/assets/icon/Right Arrow.svg',
            value: 'right',
            text: 'Right'
          }
        ],
        description: 'Party in the U.S.A'
      },
      {
        url: '/assets/icon/Up Arrow.svg',
        text: 'Up arrow',
        id: 2,
        active: false,
        buttons:[
          {
            url: '/assets/icon/Up Arrow.svg',
            value: 'up',
            text: 'Up'
          }
        ],
        value: 'up',
        description: 'Bo$$'
      },
      {
        url: '/assets/icon/Down Arrow.svg',
        text: 'Down arrow',
        id: 3,
        active: false,
        buttons:[
          {
            url: '/assets/icon/Down Arrow.svg',
            value: 'down',
            text: 'Down'
          }
        ],
        value: 'down',
        description: 'Party in the U.S.A part 2'
      },
      {
        url: '/assets/icon/spacebar.svg',
        text: 'Spacebar',
        id: 4,
        active: false,
        buttons:[
          {
            url: '/assets/icon/spacebar.svg',
            value: 'space',
            text: 'spacebar'
          }
        ],
        value: 'space',
        description: 'Hands up'
      },
      {
        url: '/assets/icon/everything.gif',
        text: 'Everything',
        id: 5,
        active: false,
        value: 'everything',
        description: 'What did it cost thanos?, i mean literally!!'
      },
      {
        url: '/assets/icon/smudge cat.jpg',
        text: 'Keyboard',
        id: 6,
        active: true,
        value: 'keyboard',
        description: '---- ---- ----'
      }
    ],
    everything: [
        {
          url: '/assets/icon/Up Arrow.svg',
          id: 0,
          active: false,
          value: 'left',
          description: 'Just one letter'
        },
        {
          url: '/assets/icon/Left arrow.svg',
          id: 1,
          active: false,
          value: 'down',
          description: 'Just one letter'
        },
        {
          url: '/assets/icon/Right Arrow.svg',
          id: 2,
          active: false,
          value: 'up',
          description: 'Just one letter'
        },
        {
          url: '/assets/icon/Down Arrow.svg',
          id: 3,
          active: false,
          value: 'right',
          description: 'Just one letter'
        },
        {
          url: '/assets/icon/triangle.svg',
          id: 3,
          active: false,
          value: 'a',
          description: 'Just one letter'
        },
        {
          url: '/assets/icon/square.svg',
          id: 3,
          active: false,
          value: 'space',
          description: 'Just one letter'
        },
        {
          url: '/assets/icon/circle.svg',
          id: 3,
          active: false,
          value: 'b',
          description: 'Just one letter'
        },
        {
          url: '/assets/icon/cross.svg',
          id: 3,
          active: false,
          value: 'e',
          description: 'Just one letter'
        },
    ]
  };


  constructor(public toastController: ToastController,
    public http: HttpClient){
               }

  public initializeConnection(){
    this.websocketReconnect();

    this.myWebSocket.onopen = (e)=>{
      this.presentToast('connected');

    };
    this.myWebSocket.onerror = (e) =>{
      this.presentToast('error');

    };
    this.myWebSocket.onclose = (e) =>{
     this.presentToast('closed');
    };

    this.myWebSocket.onmessage = (e)=>{
      // console.log(e);
    };
  }

  websocketReconnect(){
    this.myWebSocket = new WebSocket('ws://192.168.0.105:1234');
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  public getkeyCodes(){
    return this.main.keyHoard;
  }

  public getkeyById(id: number): Message {
    return this.main.keyHoard[id];
  }

  public send(value: string): void{
    this.myWebSocket.send(value);
  }
}
