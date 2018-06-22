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

  showlink(url: string, data?: any): Observable<any> {// 之后可以用表示链接的类来代替 像Upfile一样
    const body = {};
    return this.http.post<any>(url, data);
  }

  // Blob请求
  requestBlob(url: any, data?: any): Observable<any> {
    return this.http.request( 'post', url, {body: data, observe: 'response', responseType: 'blob'});
  }

  // Blob文件转换下载
  downFile(result: any, fileName: string) {
    var data = result.body;

    var blob = new Blob([data]);
    var objectUrl = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.setAttribute('style', 'display:none');
    a.setAttribute('href', objectUrl);
    a.setAttribute('download', fileName);
    a.click();
    a.addEventListener('click', function() {
      URL.revokeObjectURL(objectUrl);
      document.getElementById('download').remove();
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor( private http: HttpClient ) {}

  uploadLink(url: any, data?: any): Observable<any> {
    return this.http.post(url, data);
  }

}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor( private downloadService: DownloadService, private uploadService: UploadService,private http: HttpClient) {}
  // 导出
  download(fileName: string, lid: string) {
    console.log('restservice export start');
    let url = 'http://localhost:8080/download';
    let body = {'filename': fileName,
      'lid': lid};
    this.downloadService.requestBlob(url, body).subscribe(result => {
      this.downloadService.downFile(result, fileName);
    });
  }

  show(): Observable<UpFiles> {
    const url = 'http://localhost:8080/showfile/1';
    // 得到文件名称数组
    return this.downloadService.showfile(url);
  }

  showLink(lid: string, node_id: string): Observable<any> {
    const url = 'http://localhost:8080/get_link';
    let body = {
      'lid': lid,
      'node_id': node_id,
    };
    return this.downloadService.showlink(url,body);
  }

  uploadLink(linkname: string, linkcontent: string, lid: string, node_id: string) {
    let url = 'http://localhost:8080/upload_link';
    let body = {
      'linkname': linkname,
      'linkcontent': linkcontent,
      'lid': lid,
      'node_id': node_id,
    };

    return this.uploadService.uploadLink( url, body);
  }

  uploadFileDescription(filename: string, fd: string, lid: string, node_id: string): Observable<any> {
    console.log("enter");
    let upFile=new Upfile();
    upFile.node_id=node_id;
    upFile.lid=lid;
    upFile.filename=filename;
    upFile.fd=fd;
    console.log(upFile);
    let url = 'http://localhost:8080/upload_fd';
    return this.http.post<any>( url, upFile);
  }
  uploadFileDescription1(filename: string, fd: string, lid: string, node_id: string): Observable<any> {
    console.log("enter");
    let upFile=new Upfile();
    upFile.node_id=node_id;
    upFile.lid=lid;
    upFile.filename=filename;
    upFile.fd=fd;
    console.log(upFile);
    let url = 'http://localhost:8080/upload_fd1';
    return this.http.post<any>( url, upFile);
  }

}
