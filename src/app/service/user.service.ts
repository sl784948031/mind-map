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
  // 创建用户
  public createUser(user: User ): Observable<Response> {
    return this.http.post<Response>(this.registerUrl, user);
  }
  // 登录
  public login(user: User ): Observable<Response> {
    return this.http.post<Response>(this.loginUrl, user);
  }
  // 修改密码
  public changePass(password: Account): Observable<Response> {
    let examineloginUrl = '/mindmap/changePass';
    return this.http.post<Response>(examineloginUrl, password);
  }
  // 验证登录
  public examineLogin(username: string): Observable<Response> {
    let examineloginUrl = '/mindmap/examinelogin/' + username;
    return this.http.post<Response>(examineloginUrl, []);
  }
  // 退出登录
  public exitLogin(username: string): Observable <Response> {
    let examineloginUrl = '/mindmap/exitlogin/' + username;
    return this.http.post<Response>(examineloginUrl, []);
  }
  // 上传学生答题结果
  public submit(data: any): Observable <Response> {
    return this.http.post<Response>(this.submitUrl, data);
  }
}

