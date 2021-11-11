import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Modules/admin/login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {path:'abc', component:QuizzComponent},
  {path:'quiz/:id2', component:QuizComponent},
  {path:'theme',component:ThemeComponent},
 {path:'', redirectTo:'/theme?q=fff', pathMatch:'full'},
  {
  path:'admin', loadChildren: () =>
  import('./Modules/admin/admin.module')
  .then(mod=>mod.AdminModule)
  
},
    {path:'**', component:QuizzComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      //enableTracing: true
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
