import { Component, OnInit } from '@angular/core';
import { Deck } from '../_models/deck';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class homeComponent implements OnInit {
 public title = 'js-blackjack';
  subTitle = '';
  public hideGame = true;
  public hideEnd = true;

  ngOnInit() { 
    const deck = new Deck(false);
    deck.shuffle();

    const players = [];
    players.push(new Player('Dealer'));
    players.push(new players('Dan'));

    deck.deal(players, 2);

    console.log(players[1]);
  }
}
