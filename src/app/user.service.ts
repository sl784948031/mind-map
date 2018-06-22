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
import {SelectQ} from './selectQ';
import {MPNode} from './MPNode';
import {DescripQ1} from './descripQ';




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
  private addQ0Url = 'http://localhost:8080/addQ0';
  private getQ0Url = 'http://localhost:8080/getQ0';
  private addQ1Url = 'http://localhost:8080/addQ1';
  private getQ1Url = 'http://localhost:8080/getQ1';
  private removeQ0Url = 'http://localhost:8080/removeQ0';
  private removeQ1Url = 'http://localhost:8080/removeQ1';

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

  public showWare(mpnode: MPNode): Observable<Array<any>> {
    const url = 'http://localhost:8080/showWare';
    return this.http.post<Array<any>>(url, mpnode );
  }

  public showResource(mpnode: MPNode): Observable<Array<any>> {
    const url = 'http://localhost:8080/showResource';
    return this.http.post<Array<any>>(url, mpnode );
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

  public addQ0(selectQ: SelectQ): Observable<any> {
    return this.http.post<any>(this.addQ0Url, selectQ);
  }

  public getQ0(mpNode: MPNode): Observable<Array<any>> {
    return this.http.post<Array<any>>(this.getQ0Url, mpNode);
  }

  public addQ1(descripQ: DescripQ1): Observable<any> {
    return this.http.post<any>(this.addQ1Url, descripQ);
  }

  public getQ1(mpNode: MPNode): Observable<Array<any>> {
    return this.http.post<Array<any>>(this.getQ1Url, mpNode);
  }

  public removeQ0(selectQ: SelectQ): Observable<any> {
    return this.http.post<any>(this.removeQ0Url, selectQ);
  }

  public removeQ1(selectQ: DescripQ1): Observable<any> {
    return this.http.post<any>(this.removeQ1Url, selectQ);
  }
}

