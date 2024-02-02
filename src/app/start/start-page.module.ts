import { NgModule } from '@angular/core';
import { StartPageComponent } from './page/start-page.component';
import { StartButtonComponent } from './components/start-button.component';


@NgModule({
  declarations: [
    StartPageComponent,
    StartButtonComponent
  ],
  exports: [
    StartPageComponent,
  ],
})
export class StartPageModule { }
