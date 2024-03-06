import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../shared/models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  baseUrl = `${environment.apiUrl}courses`;
  private http = inject(HttpClient);

  public get(
    currentPage: number,
    pageSize: number,
    category: string,
    search: string
  ): Observable<HttpResponse<any>> {
    let url = `${this.baseUrl}?_page=${currentPage}&_limit=${pageSize}`;
    if (category) {
      url = `${url}&category=${category}`;
    }
    if (search) {
      url = `${this.baseUrl}?q=${search}`;
    }
    return this.http.get<Course[]>(`${url}`, { observe: 'response' }).pipe(take(1));
    //-----Take desinscreve do observable, se uma função é chamada em mais de um lugar------------//
  }

  public getCoursesById(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/${id}`);
  }

  public postCourses(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(`${this.baseUrl}`, course);
  }

  public putCourses(id: number, course: Course): Observable<Course[]> {
    return this.http.put<Course[]>(`${this.baseUrl}/${id}`, course);
  }

  public deleteCourses(id: number): Observable<Course[]> {
    return this.http.delete<Course[]>(`${this.baseUrl}/${id}`);
  }
}
