import { Component, OnInit } from '@angular/core';
import { BingoService } from '../bingo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.less']
})
export class OperatorComponent {

  operatorHash: string;
  gameId: string;

  opts: number[][] = []

  constructor(private service: BingoService, private route: ActivatedRoute) {

    


    this.route.paramMap.subscribe(params => {
      this.operatorHash = params.get('operatorHash');
      this.gameId = params.get('gameId');
    });

    for (var i = 1; i <= 15; i++) {
      const row = [i, i+15, i+30, i+45, i+60]
      this.opts.push(row);
    }
  }

  start() {

  }

  call(operatorCall: number) {

  }

}
