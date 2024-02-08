import { PlayerGameData } from './../interfaces/letter.interface';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl:'./word.component.html',
  styleUrl: './word.component.css',
})
export class WordComponent implements OnInit  {
  public randomWordUrl:string = 'https://random-word-api.herokuapp.com/word';
  public randomWordUrlEn:string = 'https://random-word-api.herokuapp.com/word?lang=en';
  public randomWord:string = '';
  public secretWord:string[] = [];


  @Input()
  public player:PlayerGameData = {
    guessLetter:'',
  }

  get replaceWord():string[] {
    return Array(this.randomWord.length).fill('');
  }

  constructor(private http: HttpClient){}

  getRandomWord(): void {
    this.http.get<string[]>(this.randomWordUrlEn).subscribe((data: string[]) => { 
      this.randomWord = data[0];

      this.secretWord = this.replaceWord;
    });
  }

  ngOnChanges() {
    if (this.player.guessLetter === "") return;
    if (!this.secretWord.includes('')) return this.winGame();

    const lowerLetter = this.player.guessLetter!.toLowerCase();
  
    if (this.randomWord.includes(lowerLetter)) {
      this.randomWord.split('').forEach((item, index) => {
        if (item === lowerLetter) {
          this.secretWord[index] = lowerLetter;
        }
      });
    } else {
      alert('No se encontró la letra. ¡Intenta otra!')
    }
  }
  winGame(){
    return alert('You Won the Game!');
  }
  ngOnInit() { 
    this.getRandomWord();
  }
}

