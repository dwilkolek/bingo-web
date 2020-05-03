import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { PlayerCount } from 'src/model/player-count';
import { PATTERN_NAMES } from 'src/model/constants';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket;
  playerId: string;
  gameId: string;
  
  constructor() {
  }

  joinAsPlayer(gameId: string, playerId: string) {
    this.socket = io();
    this.gameId = gameId;
    this.playerId = playerId;
    this.socket.emit('join-game', { gameId, playerId });
  }

  toggleMark(cardId: string, row: number, col: number) {
    this.socket.emit('toggle-mark', { cardId, row, col });
  }

  bingo(cardId: string, pattern: PATTERN_NAMES) {
    this.socket.emit('bingo', { cardId, pattern });
  }

  joinAsOperator(gameId: string, operatorHash: string) {
    this.socket = io();
    this.gameId = gameId;
    this.socket.emit('join-game', { gameId, operatorHash });
  }

  onCall(cb) {
    this.socket.on('call', cb)
  }

  getStatus() {
    this.socket.emit('get-status')
  }
  getPlayerCount() {
    this.socket.emit('get-player-count')
  }
  getWinner() {
    this.socket.emit('get-winner')
  }
  getLastCall() {
    this.socket.emit('get-last-call')
  }
  getPoints() {
    this.socket.emit('get-points')
  }
  
  
  onPlayerCount(cb) {
    this.socket.on('player-count', cb)
  }

  onGameStatus(cb) {
    this.socket.on('status', cb)
  }

  onWinnerAnnouncement(cb) {
    this.socket.on('winner', cb)
  }
  onPoints(cb) {
    this.socket.on('points', cb)
  }
  startGame() {
    this.socket.emit('start-game')
  }

  nextCall() {
    this.socket.emit('next-call')
  }

}
