import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/model/game';
import { HttpClient } from '@angular/common/http';
import { BingoCard } from 'src/model/bingo-card';

@Injectable({
  providedIn: 'root'
})
export class BingoService {

  constructor(private http: HttpClient) { }

  private static API = '/api/game';

  private static CARD = 'card';

  games(): Observable<Game[]> {
    return this.http.get<Game[]>(BingoService.API);
  }

  createGame(name: string): Observable<Game> {
    return this.http.post<Game>(BingoService.API, { name });
  }

  subscribe(playerName: string, gameId: string): Observable<BingoCard> {
    return this.http.post<BingoCard>(`${BingoService.API}/${gameId}/subscribe`, { gameId, playerName });
  }

  card(gameId: string, cardId: string): Observable<BingoCard> {
    return this.http.get<BingoCard>(`${BingoService.API}/${gameId}/${BingoService.CARD}/${cardId}`);
  }
}
