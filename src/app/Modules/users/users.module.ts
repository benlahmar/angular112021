import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AdminModule } from '../admin/admin.module';
import { AppModule } from 'src/app/app.module';
import { UserComponent } from './user/user.component';
import { MyserviceService } from './Services/myservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersService } from './Services/users.service';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule

  ],
  providers:[MyserviceService, UsersService]
})
export class UsersModule { }
