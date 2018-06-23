import { Component, OnInit, ElementRef} from '@angular/core';
import {FileUploader, FileSelectDirective, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import {RestService} from '../../download.service';
import { UpFiles} from '../../upfiles';
import {Upfile} from '../../upfile';
import {UserService} from '../../user.service';
import {LinkedList} from 'ngx-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {MPNode} from '../../MPNode';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {Response} from '../../response';
@Component({
  selector: 'app-tcourseware',
  templateUrl: './tcourseware.component.html',
  styleUrls: ['./tcourseware.component.css']
})
export class TcoursewareComponent implements OnInit {
  show_hide_val1: boolean = false;
  upfiles: UpFiles = new UpFiles();
  filenames: Upfile[];
  lid: string;
  node_id: string;
  mapid: string;
  username: string;
  constructor(private router: Router,private route: ActivatedRoute, private restService: RestService, private userService: UserService , private elementRef: ElementRef) { }


  public url: string = 'http://localhost:8080/upload/';
  public uploader: FileUploader = new FileUploader({url: this.url});
  selectedFiles: FileList;
  public filedescription: LinkedList<string> = new LinkedList();

  showFile() {
    let mpnode = new MPNode();
    mpnode.lid=this.lid;
    mpnode.node_id=this.node_id;
    console.log(mpnode);
    mpnode.mapid=this.mapid;
    this.userService.showWare(mpnode).subscribe(data => {
      console.log(data);
      if(data ===null){
      }else{
        this.upfiles.list = data;
        this.update(this.upfiles);
      }
    });
  }
  getID1() {
    const lid = this.route.snapshot.paramMap.get('lid');
    const mapid = this.route.snapshot.paramMap.get('mapid');
    this.mapid=mapid;
    console.log(lid);
    this.lid = lid;
    console.log(this.lid);
    const node_id = this.route.snapshot.paramMap.get('node_id');
    this.node_id = node_id;
    this.url='http://localhost:8080/upload_ware/'+this.lid+"/"+this.node_id+"/"+this.mapid;
    console.log(this.url);
    this.uploader=new FileUploader({url: this.url});
    const username = this.route.snapshot.paramMap.get('username');
    this.username = username;
    this.userService.examineLogin(this.username)
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

  selectFile(event) {
    console.log('select file');
    this.selectedFiles = event.target.files;
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

  ngOnInit() {
    this.getID1();
    this.showFile();
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
    this.restService.uploadFileDescription1(item.file.name, fd, this.lid, this.node_id,this.mapid)
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
    this.restService.download1(filename, this.lid,this.mapid);
  }
  exitLogin3() {
    this.userService.exitLogin(this.username)
        .subscribe(data => {
          alert("已登出！");
          this.router.navigateByUrl('login');
        });
  }
}
