import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from 'src/app/quiz/quiz.component';
import { LoginComponent } from './login/login.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'/admin/login', pathMatch:'full'},
  {path:'scores', component:ScoreComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
