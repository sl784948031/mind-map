import { Component, OnInit, ElementRef} from '@angular/core';
import {FileUploader, FileSelectDirective, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import {RestService} from '../../download.service';
import { UpFiles} from '../../upfiles';
import {Upfile} from '../../upfile';
import {UserService} from '../../user.service';
import {LinkedList} from "ngx-bootstrap";
import {ActivatedRoute, Router} from '@angular/router';
import {MPNode} from '../../MPNode';
import {Link} from '../../Link';
import {Response} from '../../response';

@Component({
  selector: 'app-tresource',
  templateUrl: './tresource.component.html',
  styleUrls: ['./tresource.component.css']
})
export class TresourceComponent implements OnInit {

  show_hide_val1: boolean = false;
  upfiles: UpFiles = new UpFiles();
  filenames: Upfile[];
  lid: string;
  node_id: string;
  linkname: string;
  linkcontent: string;
  links: Link[];
  username: string;
  mapid: string;
  constructor(private router: Router,private route: ActivatedRoute, private restService: RestService, private userService: UserService , private elementRef: ElementRef) { }


  public url: string = 'http://13.67.110.158:8080/mindmap/upload/1';
  public uploader: FileUploader = new FileUploader({url: this.url});
  selectedFiles: FileList;
  public filedescription: LinkedList<string> = new LinkedList();

  showFile() {
    let mpnode = new MPNode();
    mpnode.lid=this.lid;
    mpnode.node_id=this.node_id;
    mpnode.mapid=this.mapid;
    console.log(mpnode);
    this.userService.showResource(mpnode).subscribe(data => {
      console.log(data);
      if(data ===null){
      }else{
        this.upfiles.list = data;
        this.update(this.upfiles);
      }
    });
  }

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

  selectFile(event) {
    console.log('select file');
    this.selectedFiles = event.target.files;
  }

  getID1() {
    const mapid = this.route.snapshot.paramMap.get('mapid');
    this.mapid=mapid;
    const lid = this.route.snapshot.paramMap.get('lid');
    const username = this.route.snapshot.paramMap.get('username');
    this.username = username;
    this.userService.examineLogin(this.username)
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
    this.url='http://13.67.110.158:8080/mindmap/upload_resource/'+this.lid+"/"+this.node_id+"/"+this.mapid;
    console.log(this.url);
    this.uploader=new FileUploader({url: this.url});
  }

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

  removeFile(item: FileItem) {
    const index = this.uploader.queue.indexOf(item);
    this.filedescription.remove(index);
    item.remove();
  }

  removeAll() {
    const length = this.filedescription.length;
    for (let i = 0; i < length; i++) {
      this.filedescription.remove(0);
    }
    this.uploader.clearQueue();
  }


  uploadFile(item: FileItem) { // 没有传入文件id，如果增加lid参数 则uploadAllFIle的内部实现也要相应改变
    item.upload();
    // 发送请求传递文件描述
  }

  uploadLink() {
    this.restService.uploadLink(this.linkname, this.linkcontent,this.lid,this.node_id,this.mapid).subscribe(result => {
      // result返回上传结果 成功或失败
      console.log("upload link success");
      this.showLink();
    });

  }
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

  afterAddingFile(fileitem: FileItem): any {
    fileitem.withCredentials = false;
    console.log(fileitem);
  }
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
  showList1() {
    this.show_hide_val1 = !this.show_hide_val1;
  }
  downloadfile(filename) {
    console.log('downloadfile start');
    this.restService.download(filename, this.lid,this.mapid);
  }
  exitLogin1() {
    this.userService.exitLogin(this.username)
        .subscribe(data => {
          alert("已登出！");
          this.router.navigateByUrl('login');
        });
  }
}
