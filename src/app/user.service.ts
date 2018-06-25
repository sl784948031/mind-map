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

import {Account} from './account';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private registerUrl = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/register';
  private loginUrl = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/login';
  private lessonUrl = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/teacher_lessons/';
  private addUrl = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/teacher_add_lessons/';
  private add2Url = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/student_add_lessons/'
  private courseUrl = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/student_lessons/';
  private addAllUrl = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/addAll';
  private saveMindMapUrl = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/saveMindMap';
  private getMindMapUrl = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/getMindMap';
  private saveNumUrl = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/saveNum';
  private getNumUrl = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/getNum';
  private addQ0Url = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/addQ0';
  private getQ0Url = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/getQ0';
  private addQ1Url = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/addQ1';
  private getQ1Url = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/getQ1';
  private removeQ0Url = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/removeQ0';
  private removeQ1Url = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/removeQ1';
  private submitUrl = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/submit';

  constructor(private http: HttpClient) { }

  public createUser(user: User ): Observable<Response> {
    return this.http.post<Response>(this.registerUrl, user);
  }

  public login(user: User ): Observable<Response> {
    return this.http.post<Response>(this.loginUrl, user);
  }
  public changePass(password: Account): Observable<Response> {
    let examineloginUrl = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/changePass';
    return this.http.post<Response>(examineloginUrl, password);
  }

  public examineLogin(username: string): Observable<Response> {
    let examineloginUrl = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/examinelogin/' + username;
    return this.http.post<Response>(examineloginUrl, []);
  }

  public exitLogin(username: string):Observable<Response> {
    let examineloginUrl = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/exitlogin/' + username;
    return this.http.post<Response>(examineloginUrl, []);
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
    const url = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/showWare';
    return this.http.post<Array<any>>(url, mpnode );
  }

  public showResource(mpnode: MPNode): Observable<Array<any>> {
    const url = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/showResource';
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

  public submit(data: any): Observable <Response> {
    return this.http.post<Response>(this.submitUrl, data);
  }
}

