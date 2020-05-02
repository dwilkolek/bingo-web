import { Component, OnInit, Input } from '@angular/core';
import { SocketioService } from 'src/app/socketio.service';

@Component({
  selector: 'game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.scss']
})
export class GameStatusComponent implements OnInit {

  gameStatus: string;

  constructor(private socket: SocketioService) { }

  ngOnInit(): void {
    this.socket.onGameStatus(gameStatus => this.gameStatus = gameStatus)
    this.socket.getStatus();
  }

}
