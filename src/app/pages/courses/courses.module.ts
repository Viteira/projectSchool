import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CoursesComponent } from "./courses.component";
import { CoursesRoutingModule } from "./courses-routing.module";
import { CoursesMaterialModule } from "src/app/shared/materials/courses-mat.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    CoursesComponent
  ],

  imports: [
    CommonModule,
    CoursesRoutingModule,
    CoursesMaterialModule,
    SharedModule
  ]
})

export class CoursesModule{}
