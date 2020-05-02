import { Component, OnInit, Input } from '@angular/core';
import { SocketioService } from 'src/app/socketio.service';

@Component({
  selector: 'last-called',
  templateUrl: './last-called.component.html',
  styleUrls: ['./last-called.component.less']
})
export class LastCalledComponent implements OnInit {

  lastCall: number;

  constructor(private socket: SocketioService) { }

  ngOnInit(): void {
    this.socket.onCall((call) => {
      this.lastCall = call;
    })
    this.socket.getLastCall();
    
  }

}
