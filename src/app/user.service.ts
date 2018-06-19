import { Injectable } from '@angular/core';
import { User } from './person';
import { Response } from './response';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Lessons} from './lessons';
import {Lesson} from './lesson';
import {Course} from './course';
import {UpFiles} from './upfiles';
import {Upfile} from './upfile';
import {MindMap} from './mindmap';
import {Number} from './number';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private registerUrl = 'http://localhost:8080/register';
  private loginUrl = 'http://localhost:8080/login';
  private lessonUrl = 'http://localhost:8080/teacher_lessons/';
  private addUrl = 'http://localhost:8080/teacher_add_lessons/';
  private add2Url = 'http://localhost:8080/student_add_lessons/'
  private courseUrl = 'http://localhost:8080/student_lessons/';
  private addAllUrl = 'http://localhost:8080/addAll';
  private saveMindMapUrl = 'http://localhost:8080/saveMindMap';
  private getMindMapUrl = 'http://localhost:8080/getMindMap';
  private saveNumUrl = 'http://localhost:8080/saveNum';
  private getNumUrl = 'http://localhost:8080/getNum';

  constructor(private http: HttpClient) { }

  public createUser(user: User ): Observable<Response> {
    return this.http.post<Response>(this.registerUrl, user);
  }

  public login(user: User ): Observable<Response> {
    return this.http.post<Response>(this.loginUrl, user);
  }

  public getLessons(user: User): Observable<Array<any>> {
    return this.http.post<Array<any>>(this.lessonUrl, user);
  }

  public addLessons(lesson: Lesson): Observable<Response> {
    return this.http.post<Response>(this.addUrl, lesson);
  }

  public getCourses(user: User): Observable<Array<any>> {
    return this.http.post<Array<any>>(this.courseUrl, user);
  }

  public addAll(user: User): Observable<Array<any>> {
    return this.http.post<Array<any>>(this.addAllUrl, user);
  }

  public addCourses(lesson: Course): Observable<Response> {
    return this.http.post<Response>(this.add2Url, lesson);
  }

  public show(lid: string): Observable<Array<any>> {
    const url = 'http://localhost:8080/showfile';
    let lesson = new Lesson();
    lesson.id = lid;
    return this.http.post<Array<any>>(url, lesson );
  }

  public saveMindMap(mmp: MindMap): Observable<any> {
    return this.http.post<any>(this.saveMindMapUrl, mmp);
  }

  public getMindMap(lesson: Lesson): Observable<any> {
    return this.http.post<any>(this.getMindMapUrl, lesson);
  }

  public saveNum(num: Number): Observable<any> {
    return this.http.post<any>(this.saveNumUrl, num);
  }

  public getNum(lesson: Lesson): Observable<any> {
    return this.http.post<any>(this.getNumUrl, lesson);
  }
}
