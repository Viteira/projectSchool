import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StudentsRoutingModule } from "./students-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { StudentsMaterialModule } from "src/app/shared/materials/students-mat.module";
import { StudentsComponent } from "./students.component";

@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports:[
    CommonModule,
    StudentsRoutingModule,
    StudentsMaterialModule,
    SharedModule
  ],

})

export class StudentsModule {}
