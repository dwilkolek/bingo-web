import { Component, OnInit } from '@angular/core';
import { BingoService } from '../bingo.service';
import { Observable } from 'rxjs';
import { Game } from 'src/model/game';
import { BingoCard } from 'src/model/bingo-card';
import { Router } from '@angular/router';
import { Player } from 'src/model/player';
import { PATTERN_NAMES, WINNER_RESOLUTION } from 'src/model/constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  games: Observable<Game[]>;

  patternOptions = Object.keys(PATTERN_NAMES);
  winByOptions = Object.keys(WINNER_RESOLUTION);

  constructor(private service: BingoService, private router: Router) {
    this.games = this.service.games();
  }


  ngOnInit(): void {
  }

  createGame(name: string, pattern: string, winBy: string, cardLimit: number) {
    this.service.createGame(name, PATTERN_NAMES[pattern], WINNER_RESOLUTION[winBy], cardLimit).subscribe((game: Game) => {
      this.router.navigate([`/operator/${game.id}/${game.operatorHash}`]);
    });
  }

  subscribe(gameId: string, playerName: string) {
    if (playerName.length < 3) {
      alert('Your name should be at least 3 characters long');
      return;
    }
    this.service.subscribe(playerName, gameId).subscribe((player: Player) => {
      this.router.navigate([`/player/${gameId}/${player.id}`]);
    });
  }
}
