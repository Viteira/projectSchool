import { OnDestroy, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { EMPTY, Observable, Subscription, catchError, debounceTime, take, tap } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { Category, Course } from 'src/app/shared/models/course';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit, OnDestroy {
  public courseList: Course[] = [];
  private couserService = inject(CoursesService);
  categoryValue = Object.values(Category);
  public form!: FormGroup;
  private fb = inject(FormBuilder);
  public totalCount: number = 0;
  public currentPage: number = 1;
  public pageSize: number = 12;
  private sub!: Subscription;
  public courseData!: Observable<any>;
  private snackbar = inject(MatSnackBar);

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.validation();
    this.form.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      if (value) {
        this.getCourses(
          this.currentPage,
          this.pageSize,
          this.f.category.value,
          this.f.search.value
        );
      }
    });
    this.getCourses(1, 12, '', '');
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
    this.courseData = this.couserService
      .get(currentPage, pageSize, category, search)
      .pipe(
        tap((response: HttpResponse<any>) => {
          this.courseList = response.body as Course[];
          let totalCount = response.headers.get('X-Total-Count');
          this.totalCount = totalCount ? Number(totalCount) : 1;
          for (let course of this.courseList) {
            switch (course.category) {
              case 'Tecnologia':
                course.image = '../../../../assets/images/tecnologia.jpg';
                course.logo = '../../../../assets/images/tecnologia.png';
                break;
              case 'Arte':
                course.image = '../../../../assets/images//arte.jpg';
                course.logo = '../../../../assets/images/arte.png';
                break;
              case 'Culinária':
                course.image = '../../../../assets/images/culinaria.jpg';
                course.logo = '../../../../assets/images/culinaria.png';
                break;
              case 'Finanças':
                course.image = '../../../../assets/images/financas.jpg';
                course.logo = '../../../../assets/images/financas.png';
                break;
              case 'Psicologia':
                course.image = '../../../../assets/images/psicologia.jpg';
                course.logo = '../../../../assets/images/psicologia.png';
                break;
              case 'Marketing':
                course.image = '../../../../assets/images/marketing.jpg';
                course.logo = '../../../../assets/images/marketing.png';
                break;
              case 'Fotografia':
                course.image = '../../../../assets/images/fotografia.jpg';
                course.logo = '../../../../assets/images/fotografia.png';
                break;
              case 'Escrita':
                course.image = '../../../../assets/images/escrita.jpg';
                course.logo = '../../../../assets/images/escrita.png';
                break;
              case 'Música':
                course.image = '../../../../assets/images/musica.jpg';
                course.logo = '../../../../assets/images/musica.png';
                break;
              case 'Ciências Ambientais':
                course.image = '../../../../assets/images/ciencias-ambientais.jpg';
                  course.logo = '../../../../assets/images/ciencias-ambientais.png';
                break;
              case 'Moda':
                course.image = '../../../../assets/images/moda.jpg';
                course.logo = '../../../../assets/images/moda.png';
                break;
              case 'Comunicação':
                course.image = '../../../../assets/images/comunicacao.jpg';
                course.logo = '../../../../assets/images/comunicacao.png';
                break;
              case 'Filosofia':
                course.image = '../../../../assets/images/filosofia.jpg';
                course.logo = '../../../../assets/images/filosofia.png';
                break;
              case 'Saúde':
                course.image = '../../../../assets/images/saude.jpg';
                course.logo = '../../../../assets/images/saude.png';
                break;
              default:
            }
          }
        }),
        catchError((err: string) => {
          this.snackbar.open(err, 'Close', {duration: 5000});
          return EMPTY;
        })
      );
    // .subscribe((response: HttpResponse<any>) => {
    //   this.courseList = response.body as Course[];
    //   let totalCount = response.headers.get('X-Total-Count');
    //   this.totalCount = totalCount ? Number(totalCount) : 0;
    //   for (let course of this.courseList) {
    //     switch (course.category) {
    //       case 'Tecnologia':
    //         course.image = '../../../../assets/images/tecnologia.jpg';
    //         break;
    //       case 'Arte':
    //         course.image = '../../../../assets/images//arte.jpg';
    //         break;
    //       case 'Culinária':
    //         course.image = '../../../../assets/images/culinaria.jpg';
    //         break;
    //       case 'Finanças':
    //         course.image = '../../../../assets/images/financas.jpg';
    //         break;
    //       case 'Psicologia':
    //         course.image = '../../../../assets/images/pisicologia.jpg';
    //         break;
    //       case 'Marketing':
    //         course.image = '../../../../assets/images/marketing.jpg';
    //         break;
    //       case 'Fotografia':
    //         course.image = '../../../../assets/images/filosofia.jpg';
    //         break;
    //       case 'Escrita':
    //         course.image = '../../../../assets/images/escrita.jpg';
    //         break;
    //       case 'Música':
    //         course.image = '../../../../assets/images/musica.jpg';
    //         break;
    //       case 'Ciências Ambientais':
    //         course.image =
    //           '../../../../assets/images/ciencias-ambientais.jpg';
    //         break;
    //       case 'Moda':
    //         course.image = '../../../../assets/images/moda.jpg';
    //         break;
    //       case 'Comunicação':
    //         course.image = '../../../../assets/images/comunicacao.jpg';
    //         break;
    //       case 'Filosofia':
    //         course.image = '../../../../assets/images/filosofia.jpg';
    //         break;
    //       case 'Saúde':
    //         course.image = '../../../../assets/images/saude.jpg';
    //         break;
    //       default:
    //     }
    //   }
    // });
  }

  public handlePageEvent(e: PageEvent): void {
    this.currentPage = e.pageIndex + 1;
    this.pageSize = e.pageSize;
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.category.value ?? '',
      this.f.search.value ?? ''
    );
  }
}
