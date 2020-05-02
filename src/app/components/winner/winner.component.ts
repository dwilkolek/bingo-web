import { Component, OnInit } from '@angular/core';
import { SocketioService } from 'src/app/socketio.service';
import { Player } from 'src/model/player';

@Component({
  selector: 'winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {

  winner: {
    cardId: string,
    player: Player
  }
  isItYou = false;

  constructor(public socket: SocketioService) { }

  ngOnInit(): void {
    this.socket.onWinnerAnnouncement(winner => {
      if (winner) {
        this.winner = winner
        console.log()
        this.isItYou = this.socket.playerId === winner.player.id
      }
    })
    this.socket.getWinner();
  }

}
