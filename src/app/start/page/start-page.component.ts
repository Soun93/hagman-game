import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.html',
  styleUrl:'./start-page.css'
})

export class StartPageComponent {
  @Output() startGame = new EventEmitter<boolean>();
  verificar(startGame:boolean){
    this.startGame.emit(startGame)
  }
}