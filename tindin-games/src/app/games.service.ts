import { Injectable } from '@angular/core';
import { Games } from './components/template/games/games.model';
import { GAMES } from './components/template/games/mock-games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  getGames(): Games[] {
    return GAMES;
  }
}
