import { NgModule } from '@angular/core';

import { GamePageComponent } from './pages/game-page.component';
import { WordComponent } from './components/word/word.component';
import { LetterComponent } from './components/letter/letter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ],
  exports: [
    GamePageComponent
  ],
  declarations: [
    GamePageComponent,
    WordComponent,
    LetterComponent
  ],
  providers: [],
})
export class GamePageModule { }
