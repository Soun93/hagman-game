import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StartPageModule } from './start/start-page.module';
import { GamePageModule } from './game/game-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StartPageModule,
    GamePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
