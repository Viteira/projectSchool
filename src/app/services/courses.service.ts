import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../shared/models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  baseUrl = `${environment.apiUrl}courses`;
  private http = inject(HttpClient);

  public getCourses(): Observable<Course[]> {
    console.log(this.baseUrl);
    return this.http.get<Course[]>(this.baseUrl);
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
