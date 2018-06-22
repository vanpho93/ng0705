import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { WordComponent } from './word/word.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    WordComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
