import { PlayerGameData } from './../components/interfaces/letter.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.html'
})

export class GamePageComponent  {
  @Input()
  public selectedWord:string = '';

  public player:PlayerGameData = {
    guessLetter:'',
  }

  handlePlayerData(PlayerData :PlayerGameData):void {
    this.player = {...PlayerData};
  }
}