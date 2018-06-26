import { Component, OnInit, ElementRef} from '@angular/core';
import {FileUploader, FileSelectDirective, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import {RestService} from '../../service/download.service';
import { UpFiles} from '../../entity/upfiles';
import {Upfile} from '../../entity/upfile';

import {AccountService} from '../../service/account.service';
import {FileService} from '../../service/file.service';
import {LinkedList} from "ngx-bootstrap";
import {ActivatedRoute, Router} from '@angular/router';
import {MPNode} from '../../entity/MPNode';
import {Response} from '../../entity/response';
import {Link} from "../../entity/Link";

@Component({
  selector: 'app-tresource',
  templateUrl: './tresource.component.html',
  styleUrls: ['./tresource.component.css']
})
export class TresourceComponent implements OnInit {
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
  // 链接名称
  linkname: string;
  // 链接描述
  linkcontent: string;
  // 链接数组
  links: Link[];
  // 用户名
  username: string;
  // 思维导图id
  mapid: string;
  constructor(private router: Router,private route: ActivatedRoute, private restService: RestService, private accountService: AccountService, 
              private fileService: FileService, private elementRef: ElementRef) { }

  // 后台处理上传的服务的url
  public url: string = '/mindmap/upload/1';
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
    mpnode.mapid=this.mapid;
    console.log(mpnode);
    this.fileService.showResource(mpnode).subscribe(data => {
      console.log(data);
      if(data ===null){
      }else{
        this.upfiles.list = data;
        this.update(this.upfiles);
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
      tmp.fd= upfiles.list[i].fd;
      this.filenames.push(tmp);
      tmp = new Upfile();
    }
  }
  // 获取html里选择的文件
  selectFile(event) {
    console.log('select file');
    this.selectedFiles = event.target.files;
  }
  // 初始化全局变量
  getID1() {
    const mapid = this.route.snapshot.paramMap.get('mapid');
    this.mapid=mapid;
    const lid = this.route.snapshot.paramMap.get('lid');
    const username = this.route.snapshot.paramMap.get('username');
    this.username = username;
    this.accountService.examineLogin(this.username)
        .subscribe(data => {
          let re = new Response();
          re = data;
          console.log(re.status);
          if (re.status === "online") {
          }else {
            alert("登录失效，请重新登录！");
            this.router.navigateByUrl('login');
          }
        });
    console.log(lid);
    this.lid = lid;
    console.log(this.lid);
    const node_id = this.route.snapshot.paramMap.get('node_id');
    this.node_id = node_id;
    this.url='/mindmap/upload_resource/'+this.lid+"/"+this.node_id+"/"+this.mapid;
    console.log(this.url);
    this.uploader=new FileUploader({url: this.url});
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

  // 上传文件
  uploadFile(item: FileItem) { // 没有传入文件id，如果增加lid参数 则uploadAllFIle的内部实现也要相应改变
    item.upload();
    // 发送请求传递文件描述
  }
  // 上传链接
  uploadLink() {
    this.restService.uploadLink(this.linkname, this.linkcontent,this.lid,this.node_id,this.mapid).subscribe(result => {
      // result返回上传结果 成功或失败
      console.log("upload link success");
      this.showLink();
    });

  }
  // 获取链接
  showLink() {
    this.restService.showLink(this.lid,this.node_id,this.mapid).subscribe(data => {
      // 数据处理
      console.log("get link success");
      this.links = data;
    });
  }

  ngOnInit() {
    this.getID1();
    this.showFile();
    this.showLink();
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
    this.restService.uploadFileDescription(item.file.name, fd, this.lid, this.node_id,this.mapid)
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
    this.restService.download(filename, this.lid,this.mapid);
  }
  // 登出
  exitLogin1() {
    this.accountService.exitLogin(this.username)
        .subscribe(data => {
          alert("已登出！");
          this.router.navigateByUrl('login');
        });
  }
}
