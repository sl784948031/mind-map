import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../entity/person";
import {Response} from '../entity/response';
import {Account} from '../entity/account';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private registerUrl = '/mindmap/register';
  private loginUrl = '/mindmap/login';

  constructor(private http: HttpClient) {}


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

  public exitLogin(username: string):Observable<Response> {
    let examineloginUrl = '/mindmap/exitlogin/' + username;
    return this.http.post<Response>(examineloginUrl, []);
  }

}