import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/model/game';

@Component({
  selector: 'game-topbar',
  templateUrl: './game-topbar.component.html',
  styleUrls: ['./game-topbar.component.scss']
})
export class GameTopBarComponent implements OnInit {

  @Input()
  isPlayer: boolean = false;

  @Input()
  game: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
