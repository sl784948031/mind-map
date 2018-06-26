import { Injectable } from '@angular/core';
import { User } from '../entity/person';
import { Response } from '../entity/response';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Account} from '../entity/account';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private registerUrl = '/mindmap/register';
  private loginUrl = '/mindmap/login';
  private submitUrl = '/mindmap/submit';

  constructor(private http: HttpClient) { }

  public createUser(user: User ): Observable<Response> {
    return this.http.post<Response>(this.registerUrl, user);
  }

  public login(user: User ): Observable<Response> {
    return this.http.post<Response>(this.loginUrl, user);
  }
  public changePass(password: Account): Observable<Response> {
    let examineloginUrl = '/mindmap/changePass';
    return this.http.post<Response>(examineloginUrl, password);
  }

  public examineLogin(username: string): Observable<Response> {
    let examineloginUrl = '/mindmap/examinelogin/' + username;
    return this.http.post<Response>(examineloginUrl, []);
  }

  public exitLogin(username: string): Observable <Response> {
    let examineloginUrl = '/mindmap/exitlogin/' + username;
    return this.http.post<Response>(examineloginUrl, []);
  }

  public submit(data: any): Observable <Response> {
    return this.http.post<Response>(this.submitUrl, data);
  }
}

