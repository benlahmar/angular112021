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
import { ThemeComponent } from './theme/theme.component';
import { AdminModule } from './Modules/admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatStepperModule} from '@angular/material/stepper';
import { DashbComponent } from './dashb/dashb.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MypipePipe } from './Pipes/mypipe.pipe';
import { Mypipe2Pipe } from './Pipes/mypipe2.pipe';
import { PipeoptionPipe } from './Pipes/pipeoption.pipe';
import { HttpClientModule } from '@angular/common/http';

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
    ConfigComponent,
    ThemeComponent,
    DashbComponent,
    MypipePipe,
    Mypipe2Pipe,
    PipeoptionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatProgressBarModule,
    MatStepperModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
