import { Component, OnInit, Input } from '@angular/core';
import { BingoCell } from 'src/model/bingo-card';

@Component({
  selector: 'bingo-cell',
  templateUrl: './bingo-cell.component.html',
  styleUrls: ['./bingo-cell.component.scss']
})
export class BingoCellComponent implements OnInit {

  @Input()
  cell: BingoCell;

  constructor() { }

  ngOnInit(): void {
  }

}
