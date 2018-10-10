import { Component, OnInit } from '@angular/core';
import { Deck } from '../_models/deck';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class homeComponent implements OnInit {
 public title = 'js-blackjack';
  public gameStarted = false;
  public gameEnded = false;

  ngOnInit() { 
    const deck = new Deck(false);
    deck.shuffle();

    const players = [];
    players.push(new Player('Dealer'));
    players.push(new Player('Dan'));

    deck.deal(players, 2);

    console.log(players[1]);
  }
  startGame() {
    this.gameStarted = true;
    this.gameEnded = false; 
  }
  endGame() {
    this.gameEnded = true;
  }
}
