import { Component, OnInit } from '@angular/core';
import { Games } from './games.model';
import { GAMES } from './mock-games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  game: Games = {
    id: 1,
    name: 'Voleibol',
    price: 59.99,
    classification: 85/100,
  };
  
  games = GAMES;
  selectedGame?: Games;

  onSelect(game: Games): void{
    this.selectedGame = game;
  }
  
  constructor() { }
  
  ngOnInit(): void {
  }

}