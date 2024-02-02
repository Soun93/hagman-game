import { Component, EventEmitter, Output } from '@angular/core';
import { PlayerGameData } from '../interfaces/letter.interface';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css',
})
export class LetterComponent {
  @Output()
  public onNewGuess: EventEmitter<PlayerGameData> = new EventEmitter();
  
  public player: PlayerGameData = {
    guessLetter:'',
  }

  public submitGuess() {
    if (this.player.guessLetter?.length != 1) return;
    this.onNewGuess.emit(this.player);
  }

}
