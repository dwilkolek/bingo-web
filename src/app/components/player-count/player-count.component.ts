import { Component, OnInit, Input } from '@angular/core';
import { PlayerCount } from 'src/model/player-count';
import { SocketioService } from 'src/app/socketio.service';

@Component({
  selector: 'player-count',
  templateUrl: './player-count.component.html',
  styleUrls: ['./player-count.component.less']
})
export class PlayerCountComponent implements OnInit {


  constructor(private socket: SocketioService) { }

  lastPlayerCountMessage = null

  ngOnInit(): void {
    this.socket.onPlayerCount((msg) => {
      console.log('message', msg)
      this.lastPlayerCountMessage = msg;
    })
    this.socket.getPlayerCount();
  }

}
