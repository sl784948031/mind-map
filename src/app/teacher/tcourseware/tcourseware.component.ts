import { Component, OnInit, ElementRef} from '@angular/core';
import {FileUploader, FileSelectDirective, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import {RestService} from '../../service/download.service';
import { UpFiles} from '../../entity/upfiles';
import {Upfile} from '../../entity/upfile';

import {AccountService} from '../../service/account.service';
import {FileService} from '../../service/file.service';
import {LinkedList} from 'ngx-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {MPNode} from '../../entity/MPNode';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {Response} from '../../entity/response';
@Component({
  selector: 'app-tcourseware',
  templateUrl: './tcourseware.component.html',
  styleUrls: ['./tcourseware.component.css']
})
export class TcoursewareComponent implements OnInit {
  // 下拉菜单的显示判断
  show_hide_val1: boolean = false;
  // 从后端接收到的已上传文件的信息
  upfiles: UpFiles = new UpFiles();
  // 已上传文件的数组 用于页面显示
  filenames: Upfile[];
  // 课程id
  lid: string;
  // 思维导图节点id
  node_id: string;
  // 思维导图id
  mapid: string;
  // 用户名
  username: string;
  constructor(private router: Router,private route: ActivatedRoute, private restService: RestService, private accountService: AccountService, 
              private fileService: FileService, private elementRef: ElementRef) { }

  // 后台处理上传的服务的url
  public url: string = '/mindmap/upload/';
  // FileUploader的实例 用来上传文件
  public uploader: FileUploader = new FileUploader({url: this.url});
  // 选择的文件
  selectedFiles: FileList;
  // 文件描述链表
  public filedescription: LinkedList<string> = new LinkedList();
  // 获取已上传文件的数组
  showFile() {
    let mpnode = new MPNode();
    mpnode.lid=this.lid;
    mpnode.node_id=this.node_id;
    console.log(mpnode);
    mpnode.mapid=this.mapid;
    this.fileService.showWare(mpnode).subscribe(data => {
      console.log(data);
      if(data ===null){
      }else{
        this.upfiles.list = data;
        this.update(this.upfiles);
      }
    });
  }
  // 初始化全局变量
  getID1() {
    const lid = this.route.snapshot.paramMap.get('lid');
    const mapid = this.route.snapshot.paramMap.get('mapid');
    this.mapid=mapid;
    console.log(lid);
    this.lid = lid;
    console.log(this.lid);
    const node_id = this.route.snapshot.paramMap.get('node_id');
    this.node_id = node_id;
    this.url='/mindmap/upload_ware/'+this.lid+"/"+this.node_id+"/"+this.mapid;
    console.log(this.url);
    this.uploader=new FileUploader({url: this.url});
    const username = this.route.snapshot.paramMap.get('username');
    this.username = username;
    this.accountService.examineLogin(this.username)
        .subscribe(data => {
          let re = new Response();
          re = data;
          console.log(re.status);
          if (re.status == "online") {
          }else {
            alert("登录失效，请重新登录！");
            this.router.navigateByUrl('login');
          }
        });
  }
  // 更新已上传文件的数组
  update(upfiles: UpFiles) {
    let tmp = new Upfile();
    this.filenames = [];
    console.log(upfiles.list.length);
    for (let i = 0; i < upfiles.list.length; i ++) {
      tmp.lid = upfiles.list[i].lid;
      tmp.filename = upfiles.list[i].filename;
      tmp.fd = upfiles.list[i].fd;
      this.filenames.push(tmp);
      tmp = new Upfile();
    }
  }
  // 获取html里选择的文件
  selectFile(event) {
    console.log('select file');
    this.selectedFiles = event.target.files;
  }
  // 添加文件到上传队列里
  addFile() {
    const file = [];
    file.push(this.selectedFiles.item(0));
    const filedescribe = this.elementRef.nativeElement.querySelector('#fd').value;
    console.log('filedescribe: ' + filedescribe);
    this.filedescription.push(filedescribe);
    console.log('filedescription: ');
    console.log(this.filedescription);
    this.uploader.addToQueue(file);
  }
  // 从上传队列里移除文件
  removeFile(item: FileItem) {
    const index = this.uploader.queue.indexOf(item);
    this.filedescription.remove(index);
    item.remove();
  }
  // 从上传队列里移除所有文件
  removeAll() {
    const length = this.filedescription.length;
    for (let i = 0; i < length; i++) {
      this.filedescription.remove(0);
    }
    this.uploader.clearQueue();
  }

  ngOnInit() {
    this.getID1();
    this.showFile();
    this.uploader.onAfterAddingFile = this.afterAddingFile;
    this.uploader.onSuccessItem = this.afterSuccess.bind(this);
  }
  // 添加文件之后
  afterAddingFile(fileitem: FileItem): any {
    fileitem.withCredentials = false;
    console.log(fileitem);
  }
  // 上传成功之后
  afterSuccess(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    const index = this.uploader.queue.indexOf(item);
    const fd = this.filedescription.get(index);
    alert("上传资源成功！");
    console.log("开始upload fd");
    this.restService.uploadFileDescription1(item.file.name, fd, this.lid, this.node_id,this.mapid)
        .subscribe(data => {
          console.log(data);
          this.showFile();
        });
  }
  // 显示或隐藏下拉菜单
  showList1() {
    this.show_hide_val1 = !this.show_hide_val1;
  }
  // 下载文件
  downloadfile(filename) {
    console.log('downloadfile start');
    this.restService.download1(filename, this.lid,this.mapid);
  }
  // 登出
  exitLogin3() {
    this.accountService.exitLogin(this.username)
        .subscribe(data => {
          alert("已登出！");
          this.router.navigateByUrl('login');
        });
  }
}
