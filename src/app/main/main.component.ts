import { Component, OnInit } from '@angular/core';
import { BingoService } from '../bingo.service';
import { Observable } from 'rxjs';
import { Game } from 'src/model/game';
import { BingoCard } from 'src/model/bingo-card';
import { Router } from '@angular/router';
import { Player } from 'src/model/player';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  games: Observable<Game[]>;
  constructor(private service: BingoService, private router: Router) {
    this.games = this.service.games();
  }


  ngOnInit(): void {
  }

  createGame(name: string) {
    this.service.createGame(name).subscribe((game: Game) => {
      this.router.navigate([`/operator/${game.id}/${game.operatorHash}`]);
    });
  }

  subscribe(gameId: string) {
    this.service.subscribe('random-string', gameId).subscribe((player: Player) => {
      this.router.navigate([`/player/${gameId}/${player.id}`]);
    });
  }
}
