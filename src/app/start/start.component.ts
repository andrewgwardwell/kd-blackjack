import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ConstantsService } from '../_services/constants.service';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],

})
export class StartComponent implements OnInit {
@Input() data: any;
@Output() start = new EventEmitter();
 

public disableButton: boolean;
public acesHigh: boolean;
public states: object;

constructor(public CONSTANTS: ConstantsService) { }
  ngOnInit() {
    this.disableButton = false;

    this.states= {
      warning: true,
      error: false
    };
    
  }
startGame(event) {
  event.preventDefault();
  this.start.emit();
}

toggleAces() {
  this.acesHigh = !this.acesHigh; 
}
}
