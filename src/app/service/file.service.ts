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

  public showWare(mpnode: MPNode): Observable<Array<any>> {
    const url = '/mindmap/showWare';
    return this.http.post<Array<any>>(url, mpnode );
  }

  public showResource(mpnode: MPNode): Observable<Array<any>> {
    const url = '/mindmap/showResource';
    return this.http.post<Array<any>>(url, mpnode );
  }

}