import { Component, OnInit } from '@angular/core';
import { BingoService } from '../bingo.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, merge } from 'rxjs/operators';
import { BingoCard } from 'src/model/bingo-card';
import { SocketioService } from '../socketio.service';
import { Player } from 'src/model/player';
import { PlayerCount } from 'src/model/player-count';
import { Game } from 'src/model/game';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent {

  playerId: string;
  gameId: string;
  player: Player;
  game: Game;
  bingoCards: BingoCard[];

  constructor(private service: BingoService, private socket: SocketioService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.gameId = params.get('gameId');
      this.playerId = params.get('playerId');
      this.service.player(this.gameId, this.playerId).subscribe((player: Player) => {
        this.player = player;
        this.bingoCards = Object.keys(player.bingoCards).map(cardId => player.bingoCards[cardId]);
      });

      this.service.game(this.gameId).subscribe((game: Game) => {
        this.game = game;        
      });
    });
  }

  callBingo(cardId) {
    this.socket.bingo(cardId);
  }
}
