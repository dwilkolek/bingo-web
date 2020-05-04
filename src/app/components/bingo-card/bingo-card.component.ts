import { Component, OnInit, Input } from '@angular/core';
import { BingoCard } from 'src/model/bingo-card';
import { SocketioService } from 'src/app/socketio.service';
import { PATTERN_NAMES } from 'src/model/constants';

@Component({
  selector: 'bingo-card',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.scss']
})
export class BingoCardComponent implements OnInit {

  @Input()
  card: BingoCard;

  @Input()
  horizontal: boolean = false;

  letters = ['B', 'I', 'N', 'G', 'O'];
  constructor(private socket: SocketioService) { }

  ngOnInit(): void {
    this.socket.onStrike((strike:BingoCard) => {
       if (strike.id === this.card.id) {
          this.card = strike;
       }
    })
  }

  mark(row, col) {
    if (this.card && this.card.id) {
      this.socket.toggleMark(this.card.id, row, col);
      this.card.numbers[row][col].marked = !this.card.numbers[row][col].marked;
    }    
  }

  bingo() {
    if (this.card && this.card.id && !this.card.banned) {
      this.socket.bingo(this.card.id)
    }
  }
}
