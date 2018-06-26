import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UpFiles} from "../entity/upfiles";
import {Upfile} from "../entity/upfile";



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor( private http: HttpClient ) {}
  // 获取已上传文件的信息
  showfile(url: string): Observable<UpFiles> {
    const body = {};
    return this.http.post<UpFiles>(url, body);
  }
  // 获取已上传链接的信息
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
  // 上传链接
  uploadLink(url: any, data?: any): Observable<any> {
    return this.http.post(url, data);
  }

}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor( private downloadService: DownloadService, private uploadService: UploadService,private http: HttpClient) {}
  // 下载文件
  download(fileName: string, lid: string,mapid: string) {
    console.log('restservice export start');
    let url = '/mindmap/download';
    let body = {'filename': fileName,
      'lid': lid,
      'mapid': mapid
    };
    this.downloadService.requestBlob(url, body).subscribe(result => {
      this.downloadService.downFile(result, fileName);
    });
  }
  // 下载文件
  download1(fileName: string, lid: string,mapid: string) {
    console.log('restservice export start');
    let url = '/mindmap/download1';
    let body = {'filename': fileName,
      'lid': lid,
      'mapid': mapid};
    this.downloadService.requestBlob(url, body).subscribe(result => {
      this.downloadService.downFile(result, fileName);
    });
  }
  // 获取已上传文件的信息
  show(): Observable<UpFiles> {
    const url = '/mindmap/showfile/1';
    // 得到文件名称数组
    return this.downloadService.showfile(url);
  }
  // 获取已上传链接的信息
  showLink(lid: string, node_id: string, mapid:string): Observable<any> {
    const url = '/mindmap/get_link';
    let body = {
      'lid': lid,
      'node_id': node_id,
      'mapid':mapid,
    };
    return this.downloadService.showlink(url,body);
  }
  // 上传链接
  uploadLink(linkname: string, linkcontent: string, lid: string, node_id: string,mapid:string) {
    let url = '/mindmap/upload_link';
    let body = {
      'linkname': linkname,
      'linkcontent': linkcontent,
      'lid': lid,
      'node_id': node_id,
      'mapid':mapid,
    };

    return this.uploadService.uploadLink( url, body);
  }
  // 上传文件描述
  uploadFileDescription(filename: string, fd: string, lid: string, node_id: string,mapid:string): Observable<any> {
    console.log("enter");
    let upFile=new Upfile();
    upFile.node_id=node_id;
    upFile.lid=lid;
    upFile.filename=filename;
    upFile.fd=fd;
    upFile.mapid=mapid;
    console.log(upFile);
    let url = '/mindmap/upload_fd';
    return this.http.post<any>( url, upFile);
  }
  // 上传文件描述
  uploadFileDescription1(filename: string, fd: string, lid: string, node_id: string,mapid:string): Observable<any> {
    console.log("enter");
    let upFile=new Upfile();
    upFile.node_id=node_id;
    upFile.lid=lid;
    upFile.filename=filename;
    upFile.fd=fd;
    upFile.mapid=mapid;
    console.log(upFile);
    let url = '/mindmap/upload_fd1';
    return this.http.post<any>( url, upFile);
  }

}
