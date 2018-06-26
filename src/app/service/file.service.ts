import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MPNode} from "../entity/MPNode";



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class FileService {

  constructor(private http: HttpClient) {}
  // 获取课件信息
  public showWare(mpnode: MPNode): Observable<Array<any>> {
    const url = '/mindmap/showWare';
    return this.http.post<Array<any>>(url, mpnode );
  }
  // 获取资源信息
  public showResource(mpnode: MPNode): Observable<Array<any>> {
    const url = '/mindmap/showResource';
    return this.http.post<Array<any>>(url, mpnode );
  }

}
