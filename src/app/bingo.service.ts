import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/model/game';
import { HttpClient } from '@angular/common/http';
import { BingoCard } from 'src/model/bingo-card';
import { Player } from 'src/model/player';
import { PATTERN_NAMES, WINNER_RESOLUTION } from 'src/model/constants';

@Injectable({
  providedIn: 'root'
})
export class BingoService {

  constructor(private http: HttpClient) { }

  private static API = '/api/game';

  private static PLAYER = 'player';

  games(): Observable<Game[]> {
    return this.http.get<Game[]>(BingoService.API);
  }

  createGame(name: string, pattern: PATTERN_NAMES, winBy: WINNER_RESOLUTION, cardLimit: number, asOperator: boolean): Observable<Game> {
    return this.http.post<Game>(BingoService.API, { name, pattern, winBy, cardLimit, asOperator: asOperator });
  }

  subscribe(playerName: string, gameId: string): Observable<Player> {
    return this.http.post<Player>(`${BingoService.API}/${gameId}/subscribe`, { gameId, playerName });
  }

  // startGame(gameId: string, operatorHash: string): Observable<String> {
  //   return this.http.post<String>(`${BingoService.API}/${gameId}`, { gameId, operatorHash });
  // }

  player(gameId: string, playerId: string): Observable<Player> {
    return this.http.get<Player>(`${BingoService.API}/${gameId}/${BingoService.PLAYER}/${playerId}`);
  }

  game(gameId: string, operatorHash?: string): Observable<Game> {
    let url = `${BingoService.API}/${gameId}`;
    if (operatorHash) {
      url = url + `/${operatorHash}`;
    }
    return this.http.get<Game>(url);
  }

  // operatorCall(gameId: string, operatorHash: string): Observable<number[]> {
  //   return this.http.post<number[]>(`${BingoService.API}/${gameId}/call`, {
  //     operatorHash
  //   });
  // }
}
