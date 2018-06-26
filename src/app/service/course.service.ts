import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../entity/person";
import {Course} from "../entity/course";
import {Response} from '../entity/response';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private add2Url = '/mindmap/student_add_lessons/'
  private courseUrl = '/mindmap/student_lessons/';
  private addAllUrl = '/mindmap/addAll';


  constructor(private http: HttpClient) {}

  public getCourses(user: User): Observable<Array<any>> {
    return this.http.post<Array<any>>(this.courseUrl, user);
  }

  public addAll(user: User): Observable<Array<any>> {
    return this.http.post<Array<any>>(this.addAllUrl, user);
  }

  public addCourses(lesson: Course): Observable<Response> {
    return this.http.post<Response>(this.add2Url, lesson);
  }
  
}