import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Games } from './components/template/games/games.model';
import { GAMES } from './components/template/games/mock-games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  getGames(): Observable<Games[]> {
    const games = of(GAMES);

    return games;
  }
}
