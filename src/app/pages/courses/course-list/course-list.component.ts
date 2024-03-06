import { HttpResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { debounceTime } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { Category, Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  public courseList: Course[] = [];
  private couserService = inject(CoursesService);
  categoryValue = Object.values(Category);
  public form!: FormGroup;
  private fb = inject(FormBuilder);
  public totalCount: number = 0;
  public currentPage: number = 1;
  public pageSize: number = 15;

  ngOnInit(): void {
    this.validation();
    this.form.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((value) => {
      if (value) {
        this.getCourses(
          this.currentPage,
          this.pageSize,
          this.f.category.value,
          this.f.search.value
        );
      }
    });
    this.getCourses(1, 15, '', '');
  }

  private validation(): void {
    this.form = this.fb.group({
      category: [''],
      search: [''],
    });
  }

  get f(): any {
    return this.form.controls;
  }

  public doSearch(): void {
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.category.value ?? '',
      this.f.search.value ?? ''
    );
  }

  public getCourses(
    currentPage: number,
    pageSize: number,
    category: string,
    search: string
  ): void {
    this.couserService
      .get(currentPage, pageSize, category, search)
      .subscribe((response: HttpResponse<any>) => {
        this.courseList = response.body as Course[];
        let totalCount = response.headers.get('X-Total-Count');
        this.totalCount = totalCount ? Number(totalCount) : 0;
        for (let course of this.courseList) {
          switch (course.category) {
            case 'Tecnologia':
              course.image = '../../../../assets/images/tecnologia.jpg';
              break;
            case 'Arte':
              course.image = '../../../../assets/images//arte.jpg';
              break;
            case 'Culinária':
              course.image = '../../../../assets/images/culinaria.jpg';
              break;
            case 'Finanças':
              course.image = '../../../../assets/images/financas.jpg';
              break;
            case 'Psicologia':
              course.image = '../../../../assets/images/pisicologia.jpg';
              break;
            case 'Marketing':
              course.image = '../../../../assets/images/marketing.jpg';
              break;
            case 'Fotografia':
              course.image = '../../../../assets/images/filosofia.jpg';
              break;
            case 'Escrita':
              course.image = '../../../../assets/images/escrita.jpg';
              break;
            case 'Música':
              course.image = '../../../../assets/images/musica.jpg';
              break;
            case 'Ciências Ambientais':
              course.image =
                '../../../../assets/images/ciencias-ambientais.jpg';
              break;
            case 'Moda':
              course.image = '../../../../assets/images/moda.jpg';
              break;
            case 'Comunicação':
              course.image = '../../../../assets/images/comunicacao.jpg';
              break;
            case 'Filosofia':
              course.image = '../../../../assets/images/filosofia.jpg';
              break;
            case 'Saúde':
              course.image = '../../../../assets/images/saude.jpg';
              break;
            default:
          }
        }
      });
  }

  public handlePageEvent(e: PageEvent): void {
    this.currentPage = (e.pageIndex + 1);
    this.pageSize = e.pageSize;
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.category.value ?? '',
      this.f.search.value ?? ''
    );
  }
}
