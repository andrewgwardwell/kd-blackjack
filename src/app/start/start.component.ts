import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConstantsService } from '../_services/constants.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],

})
export class StartComponent implements OnInit {
@Input() data: any;
@Output() outgoingData = new EventEmitter<string>();
  constructor(public CONSTANTS:ConstantsService) { }
public disableButton: boolean;
  ngOnInit() {
    this.disableButton = false;
    
  }
startGame(event) {
  event.preventDefault();
  console.log('starting the game...');
}
}
