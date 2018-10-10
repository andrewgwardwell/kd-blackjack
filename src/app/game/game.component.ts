import { Component, OnInit } from '@angular/core';

import { Player } from '../_models/player';
import { Deck } from '../_models/deck';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public player: Player ;


  constructor() { }

  ngOnInit() { this.player = new Player('Dan');
  const deck = new Deck(false);
  deck.shuffle();
  deck.deal([this.player],2);
  }

}
