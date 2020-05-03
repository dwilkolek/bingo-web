import { Component, OnInit } from '@angular/core';
import { SocketioService } from 'src/app/socketio.service';

@Component({
  selector: 'points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {

  constructor(private socket: SocketioService) { }

  points: number = -1;

  ngOnInit(): void {
    this.socket.onPoints(points => {
      console.log('points', points)
      this.points = points;
    })
    this.socket.getPoints();
  }

}
