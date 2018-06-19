import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UpFiles} from './upfiles';
import {Upfile} from './upfile';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor( private http: HttpClient ) {}

  showfile(url: string): Observable<UpFiles> {
    const body = {};

    return this.http.post<UpFiles>(url, body);
  }


  // Blob请求
  requestBlob(url: any, data?: any): Observable<any> {
    console.log('requestblob data');
    //console.log(data);
    return this.http.request( 'post', url, {body: data, observe: 'response', responseType: 'blob'});
  }
  // Blob文件转换下载
  downFile(result, fileName) {
    var data = result.body;
    console.log('data:');
    console.log(data);
    console.log('data.type:');
    console.log(data.type);

    var blob = new Blob([data]);
    var objectUrl = URL.createObjectURL(blob);
    console.log(objectUrl);
    var a = document.createElement('a');
    a.setAttribute('style', 'display:none');
    a.setAttribute('href', objectUrl);
    a.setAttribute('download', fileName);
    a.click();
    console.log('a:');
    console.log(a);
    a.addEventListener('click', function() {
      URL.revokeObjectURL(objectUrl);
      document.getElementById('download').remove();
    });
  }
}

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor( private downloadService: DownloadService ) {}
  // 导出
  download(fileName: string, lid: string) {
    console.log('restservice export start');
    let url = 'http://localhost:8080/download';
    let body = {'filename': fileName,
    'lid': lid}
    this.downloadService.requestBlob(url, body).subscribe(result => {
      console.log('downFile start');
      this.downloadService.downFile(result, fileName);
    });
  }

  show(): Observable<UpFiles> {
    const url = 'http://localhost:8080/showfile/1';
    // 得到文件名称数组
    return this.downloadService.showfile(url);
  }

}
