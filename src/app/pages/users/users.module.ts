import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyDisciplinesComponent } from './my-disciplines/my-disciplines.component';
import { MyConquestsComponent } from './my-conquests/my-conquests.component';
import { UsersMaterialModule } from 'src/app/shared/materials/users-mat.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UsersComponent,
    MyProfileComponent,
    MyDisciplinesComponent,
    MyConquestsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UsersMaterialModule,
    SharedModule
  ]
})
export class UsersModule { }
