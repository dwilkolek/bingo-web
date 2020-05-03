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
    scorePoints: any[],
    player: Player
  }
  isItYou = false;

  constructor(public socket: SocketioService) { }

  ngOnInit(): void {
    this.socket.onWinnerAnnouncement(winnerMessage => {
      if (winnerMessage) {
        this.winner = winnerMessage
        console.log()
        this.isItYou = this.socket.playerId === winnerMessage.player.id
      }
    })
    this.socket.getWinner();
  }

}
