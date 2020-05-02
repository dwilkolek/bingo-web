import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket;

  constructor() {
    
  }
  init(gameId: string, callback) {
    this.socket = io();
    this.socket.emit('join-game', gameId);
    this.socket.on('operatorCalled', callback)
  }

}
