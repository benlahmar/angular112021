import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { QuizzComponent } from './quizz/quizz.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { OptionComponent } from './option/option.component';
import { ParantComponent } from './parant/parant.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    QuizzComponent,
    QuizComponent,
    QuestionComponent,
    OptionComponent,
    ParantComponent,
    ChildComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
