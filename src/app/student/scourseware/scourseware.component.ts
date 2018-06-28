import { Component, OnInit} from '@angular/core';
import {FileUploader, FileSelectDirective, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import {RestService} from '../../service/download.service';
import { UpFiles} from '../../entity/upfiles';
import {Upfile} from '../../entity/upfile';
import {AccountService} from '../../service/account.service';
import {FileService} from '../../service/file.service';

import {MPNode} from '../../entity/MPNode';
import {ActivatedRoute, Router} from '@angular/router';
import {Response} from '../../entity/response';

@Component({
  selector: 'app-scourseware',
  templateUrl: './scourseware.component.html',
  styleUrls: ['./scourseware.component.css']
})
export class ScoursewareComponent implements OnInit {
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
  mapid:string;
  // 用户名
  username: string;


  constructor(private router: Router,private route: ActivatedRoute, private restService: RestService, private accountService: AccountService,
              private fileService: FileService) { }
  // 后台处理上传的服务的url
  public url: string = '/mindmap/upload/';
  // 获取已上传文件的数组
  showFile() {
    let mpnode = new MPNode();
    mpnode.lid=this.lid;
    mpnode.node_id=this.node_id;
    mpnode.mapid=this.mapid;
    console.log(mpnode);
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
    const mapid = this.route.snapshot.paramMap.get('mapid');
    this.mapid=mapid;
    const lid = this.route.snapshot.paramMap.get('lid');
    console.log(lid);
    this.lid = lid;
    console.log(this.lid);
    const node_id = this.route.snapshot.paramMap.get('node_id');
    this.node_id = node_id;
    this.url='/mindmap/upload_ware/'+this.lid+"/"+this.node_id;
    console.log(this.url);
    const username = this.route.snapshot.paramMap.get('username');
    this.username = username;
    console.log(this.username);
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
      tmp.fd=upfiles.list[i].fd;
      this.filenames.push(tmp);
      tmp = new Upfile();
    }
  }
  // 下载文件
  downloadfile(filename) {
    console.log('downloadfile start');
    console.log(filename);
    console.log(this.lid);
    console.log(this.mapid);
    this.restService.download1(filename, this.lid,this.mapid);
  }

  ngOnInit() {
    this.getID1();
    this.showFile();
  }


  // 显示或隐藏下拉菜单
  showList1() {
    this.show_hide_val1 = !this.show_hide_val1;
  }
  // 登出
  exitLogin8
  () {
    this.accountService.exitLogin(this.username)
        .subscribe(data => {
          alert("已登出！");
          this.router.navigateByUrl('login');
        });
  }

}
