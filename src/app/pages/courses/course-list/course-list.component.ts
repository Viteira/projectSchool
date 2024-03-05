import { Component, inject } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  public courseList: Course[] = [];
  private couserService = inject(CoursesService);

  constructor () {}

  ngOnInit(): void {
    this.getCourses2();
    this.image();
  }

  public getCourses2(): void{
    this.couserService.getCourses().subscribe((response: Course[]) =>{
      this.courseList = response;
      for(let course of this.courseList){
        switch (course.category) {
          case 'Tecnologia':
            course.image = '../../../../assets/images/tecnologia.jpg';
            break;
          case 'Arte':
            course.image ='../../../../assets/images//arte.jpg';
            break;
          case 'Culinária':
            course.image = '../../../../assets/images/culinaria.jpg';
            break;
          case 'Finanças':
            course.image ='../../../../assets/images/financas.jpg';
            break;
          case 'Psicologia':
            course.image = '../../../../assets/images/pisicologia.jpg';
            break;
          case 'Marketing':
            course.image ='../../../../assets/images/marketing.jpg';
            break;
          case 'Fotografia':
            course.image = '../../../../assets/images/filosofia.jpg';
            break;
          case 'Escrita':
            course.image ='../../../../assets/images/escrita.jpg';
            break;
          case 'Música':
            course.image = '../../../../assets/images/musica.jpg';
            break;
          case 'Ciências Ambientais':
            course.image ='../../../../assets/images/ciencias-ambientais.jpg';
            break;
          case 'Moda':
            course.image = '../../../../assets/images/moda.jpg';
            break;
          case 'Comunicação':
            course.image ='../../../../assets/images/comunicacao.jpg';
            break;
          case 'Filosofia':
            course.image = '../../../../assets/images/filosofia.jpg';
            break;
          case 'Saúde':
            course.image ='../../../../assets/images/saude.jpg';
            break;
          default:
        }
      }
    });
  }

  public image(): void{
    for(let course of this.courseList){
      if(course.category === 'Arte'){
        console.log("Teste");
      }
    }
  }
}
