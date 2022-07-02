import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';
import { Games } from './games.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Games[] = [];
  selectedGame?: Games;

  
  constructor( private gamesService: GamesService) { }
  
  ngOnInit(): void {
    this.getGames();
  }
  
getGames(): void{
  this.games = this.gamesService.getGames();
}

  onSelect(game: Games): void{
    this.selectedGame = game;
  }
}