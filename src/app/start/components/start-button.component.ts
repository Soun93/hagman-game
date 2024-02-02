import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start-button',
  template: `
    <button (click)="emitStart()"> Start Game </button>
  `,
  styles: `
    button {
      background-color: transparent;
      border-radius: 5px;
      height: 50px;
      width: 100px;
      border: 1px solid;
      cursor: pointer;
      font-size: 100%;
    }
    
    button:hover{
      transform: scale(1.05);
      transition: 500ms;
    }
  `
})

export class StartButtonComponent  {
  startedGame:boolean = false;
  @Output() 
  public startGame = new EventEmitter<boolean>();

  emitStart():void {
    this.startedGame = true;
    this.startGame.emit(this.startedGame);
  }
}