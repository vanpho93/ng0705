import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { WordComponent } from './word/word.component';
import { ListComponent } from './list/list.component';
import { WordsComponent } from './words/words.component';
import { WeatherComponent } from './weather/weather.component';
import { WordItemComponent } from './words/word-item.component';
import { WordFormComponent } from './words/word-form.component';
import { WordFilterComponent } from './words/word-filter.component';

import { ChildComponent } from './interact/child.component';
import { ParentComponent } from './interact/parent.component';
import { SignUpComponent } from './form/sign-up.component';

import { valueReducer, wordsReducer, shouldShowFormReducer, filterModeReducer } from './reducers';
import { WordService } from './services/word.service';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    WordComponent,
    ListComponent,
    WordsComponent,
    ChildComponent,
    ParentComponent,
    WordItemComponent,
    WordFormComponent,
    WordFilterComponent,
    WeatherComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({
      value: valueReducer,
      words: wordsReducer,
      filterMode: filterModeReducer,
      shouldShowForm: shouldShowFormReducer
    })
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
