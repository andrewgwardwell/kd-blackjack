import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { homeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { EndComponent } from './end/end.component';
import { GameComponent } from './game/game.component';
import { ControlsComponent } from './controls/controls.component';
import { ConstantsService } from './_services/constants.service';
@NgModule({
  declarations: [
    homeComponent,
    StartComponent,
    EndComponent,
    GameComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ConstantsService],
  bootstrap: [homeComponent]
})
export class AppModule { }
