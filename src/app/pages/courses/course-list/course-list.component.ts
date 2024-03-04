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
            course.image = '../../../../assets/images/tecnologia.webp';
            break;
          case 'Arte':
            course.image ='../../../../assets/images//arte.webp';
            break;
          case 'Culinária':
            course.image = '../../../../assets/images/culinaria.webp';
            break;
          case 'Finanças':
            course.image ='../../../../assets/images/financas.webp';
            break;
          case 'Psicologia':
            course.image = '../../../../assets/images/pisicologia.webp';
            break;
          case 'Marketing':
            course.image ='../../../../assets/images/marketing.webp';
            break;
          case 'Fotografia':
            course.image = '../../../../assets/images/filosofia.webp';
            break;
          case 'Escrita':
            course.image ='../../../../assets/images/escrita.webp';
            break;
          case 'Música':
            course.image = '../../../../assets/images/musica.webp';
            break;
          case 'Ciências Ambientais':
            course.image ='../../../../assets/images/ciencias-ambientais.webp';
            break;
          case 'Moda':
            course.image = '../../../../assets/images/moda.webp';
            break;
          case 'Comunicação':
            course.image ='../../../../assets/images/comunicacao.webp';
            break;
          case 'Filosofia':
            course.image = '../../../../assets/images/filosofia.webp';
            break;
          case 'Saúde':
            course.image ='../../../../assets/images/saude.webp';
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
