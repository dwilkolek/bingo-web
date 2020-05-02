import { Component, OnInit } from '@angular/core';
import { BingoService } from '../bingo.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/model/game';
import { SocketioService } from '../socketio.service';
import { PlayerCount } from 'src/model/player-count';
import { BingoCard, BingoCell } from 'src/model/bingo-card';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.less']
})
export class OperatorComponent {

  operatorHash: string;
  gameId: string;

  game: Game;

  lastCalled: number;

  bingoCard: BingoCard;

  opts: number[][] = []

  constructor(private service: BingoService, private socket: SocketioService, private route: ActivatedRoute) {
    const bingoCard = new BingoCard();
    bingoCard.numbers = [];
    for (var i = 1; i <= 15; i++) {
      const row: BingoCell[] = [new BingoCell(i), new BingoCell(i + 15), new BingoCell(i + 30), new BingoCell(i + 45), new BingoCell(i + 60)]
      bingoCard.numbers.push(row);
    }
    this.bingoCard = bingoCard;

    this.route.paramMap.subscribe(params => {
      this.operatorHash = params.get('operatorHash');
      this.gameId = params.get('gameId');
      this.service.game(this.gameId, this.operatorHash).subscribe(game => {
        this.game = game;
        this.markCells();
        this.socket.onCall((call) => {
          this.game.calledNumbers.push(call);
          this.markCells();
        })
      });
    });



  }


  markCells() {
    this.bingoCard.numbers.forEach(row => {
      row.forEach(cell => {
        if (this.game.calledNumbers.indexOf(cell.value) > -1) {
          cell.marked = true;
        }
      })
    })
  }

  start() {
    console.log('starting game')
    this.socket.startGame();
    this.game.status = 'STARTED';
  }

  operatorCall() {
    this.socket.nextCall()
  }

}
