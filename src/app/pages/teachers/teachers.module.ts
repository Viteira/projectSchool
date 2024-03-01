import { NgModule } from "@angular/core";
import { TeachersComponent } from "./teachers.component";
import { CommonModule } from "@angular/common";
import { TeachersRoutingModule } from "./teachers-routing.module";
import { TeachersMaterialModule } from "src/app/shared/materials/teachers-mat.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    TeachersMaterialModule,
    SharedModule
  ]
})

export class TeachersModule {}
