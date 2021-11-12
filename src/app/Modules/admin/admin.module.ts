import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ScoreComponent } from './score/score.component';
import { TabDirective } from './Directives/tab.directive';
import { PipeadminPipe } from './Pipes/pipeadmin.pipe';


@NgModule({
  declarations: [LoginComponent, ScoreComponent, TabDirective, PipeadminPipe],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
