import { Component, OnInit } from '@angular/core';
import { BingoService } from '../bingo.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, merge } from 'rxjs/operators';
import { BingoCard } from 'src/model/bingo-card';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent {

  cardId: string;
  gameId: string;
  card: BingoCard;
  constructor(private service: BingoService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.cardId = params.get('cardId');
      this.gameId = params.get('gameId');
      this.service.card(this.gameId, this.cardId).subscribe((card: BingoCard) => {
        this.card = card;
      });
    });
  }
}
