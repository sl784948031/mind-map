import { Injectable } from '@angular/core';
import { User } from '.././person';
import { Response } from '.././response';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Lessons} from '.././lessons';
import {Lesson} from '.././lesson';
import {Course} from '.././course';
import {UpFiles} from '.././upfiles';
import {Upfile} from '.././upfile';
import {MindMap} from '.././mindmap';
import {Number} from '.././number';
import {SelectQ} from '.././selectQ';
import {MPNode} from '.././MPNode';
import {DescripQ1} from '.././descripQ';

import {Account} from '.././account';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  private registerUrl = '/mindmap/register';
  private loginUrl = '/mindmap/login';
  private lessonUrl = '/mindmap/teacher_lessons/';
  private addUrl = '/mindmap/teacher_add_lessons/';
  private add2Url = '/mindmap/student_add_lessons/'
  private courseUrl = '/mindmap/student_lessons/';
  private addAllUrl = '/mindmap/addAll';
  private saveMindMapUrl = '/mindmap/saveMindMap';
  private getMindMapUrl = '/mindmap/getMindMap';
  private saveNumUrl = '/mindmap/saveNum';
  private getNumUrl = '/mindmap/getNum';
  private addQ0Url = '/mindmap/addQ0';
  private getQ0Url = '/mindmap/getQ0';
  private addQ1Url = '/mindmap/addQ1';
  private getQ1Url = '/mindmap/getQ1';
  private removeQ0Url = '/mindmap/removeQ0';
  private removeQ1Url = '/mindmap/removeQ1';
  private submitUrl = '/mindmap/submit';

  constructor(private http: HttpClient) {}

  public getLessons(user: User): Observable<Array<any>> {
    return this.http.post<Array<any>>(this.lessonUrl, user);
  }

  public addLessons(lesson: Lesson): Observable<Response> {
    return this.http.post<Response>(this.addUrl, lesson);
  }
  
}