import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/model/game';

@Component({
  selector: 'game-sidebar',
  templateUrl: './game-sidebar.component.html',
  styleUrls: ['./game-sidebar.component.scss']
})
export class GameSidebarComponent implements OnInit {

  @Input()
  game: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
