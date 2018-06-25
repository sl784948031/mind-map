import { Component, OnInit} from '@angular/core';
import {FileUploader, FileSelectDirective, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import {RestService} from '../../download.service';
import { UpFiles} from '../../upfiles';
import {Upfile} from '../../upfile';
import {UserService} from '../../user.service';
import {MPNode} from '../../MPNode';
import {ActivatedRoute, Router} from '@angular/router';
import {Response} from '../../response';

@Component({
  selector: 'app-scourseware',
  templateUrl: './scourseware.component.html',
  styleUrls: ['./scourseware.component.css']
})
export class ScoursewareComponent implements OnInit {
  show_hide_val1: boolean = false;
  upfiles: UpFiles = new UpFiles();
  filenames: Upfile[];
  lid: string;
  node_id: string;
  mapid:string;
  username: string;
  constructor(private router: Router,private route: ActivatedRoute, private restService: RestService, private userService: UserService ) { }
  public url: string = 'http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/upload/';

  showFile() {
    let mpnode = new MPNode();
    mpnode.lid=this.lid;
    mpnode.node_id=this.node_id;
    mpnode.mapid=this.mapid
    console.log(mpnode);
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
    const mapid = this.route.snapshot.paramMap.get('mapid');
    this.mapid=mapid;
    const lid = this.route.snapshot.paramMap.get('lid');
    console.log(lid);
    this.lid = lid;
    console.log(this.lid);
    const node_id = this.route.snapshot.paramMap.get('node_id');
    this.node_id = node_id;
    this.url='http://13.67.110.158:8004/pj-0.0.1-SNAPSHOT/upload_ware/'+this.lid+"/"+this.node_id;
    console.log(this.url);
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
      tmp.fd=upfiles.list[i].fd;
      this.filenames.push(tmp);
      tmp = new Upfile();
    }
  }
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

  afterAddingFile(fileitem: FileItem): any {
    fileitem.withCredentials = false;
    console.log(fileitem);
  }


  showList1() {
    this.show_hide_val1 = !this.show_hide_val1;
  }
  exitLogin8
  () {
    this.userService.exitLogin(this.username)
        .subscribe(data => {
          alert("已登出！");
          this.router.navigateByUrl('login');
        });
  }

}
