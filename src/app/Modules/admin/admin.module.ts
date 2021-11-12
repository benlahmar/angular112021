import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ScoreComponent } from './score/score.component';
import { TabDirective } from './Directives/tab.directive';
import { PipeadminPipe } from './Pipes/pipeadmin.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlogComponent } from './formlog/formlog.component';


@NgModule({
  declarations: [LoginComponent, ScoreComponent, TabDirective, PipeadminPipe, FormlogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
