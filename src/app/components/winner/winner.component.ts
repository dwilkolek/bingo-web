import { Component, OnInit } from '@angular/core';
import { SocketioService } from 'src/app/socketio.service';
import { Player } from 'src/model/player';

@Component({
  selector: 'winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.less']
})
export class WinnerComponent implements OnInit {

  winner: {
    cardId: string,
    player: Player
  }
  isItYou = false;

  constructor(private socket: SocketioService) { }

  ngOnInit(): void {
    this.socket.onWinnerAnnouncement(winner => {
      this.winner = winner
      this.isItYou = this.socket.playerId === winner.playerId
    })
    this.socket.getWinner();
  }

}
