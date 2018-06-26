import { Component, OnInit} from '@angular/core';
import {FileUploader, FileSelectDirective, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import {RestService} from '../../download.service';
import { UpFiles} from '../../upfiles';
import {Upfile} from '../../upfile';
import {UserService} from '../../user.service';
import {MPNode} from '../../MPNode';
import {ActivatedRoute, Router} from '@angular/router';
import {Link} from '../../Link';
import {Response} from '../../response';

@Component({
  selector: 'app-sresource',
  templateUrl: './sresource.component.html',
  styleUrls: ['./sresource.component.css']
})

export class SresourceComponent implements OnInit {

  show_hide_val1: boolean = false;
  upfiles: UpFiles = new UpFiles();
  filenames: Upfile[];
  lid: string;
  node_id: string;
  public url: string = '/mindmap/upload/';
  username: string;
  mapid:string;
  links: Link[];
  constructor(private router: Router,private route: ActivatedRoute,private restService: RestService, private userService: UserService ) { }

  showLink() {
    this.restService.showLink(this.lid,this.node_id,this.mapid).subscribe(data => {
      // 数据处理
      console.log("get link success");
      this.links = data;
    });
  }




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
      tmp.fd=upfiles.list[i].fd;
      this.filenames.push(tmp);
      tmp = new Upfile();
    }
  }
  downloadfile(filename) {
    console.log('downloadfile start');
    this.restService.download(filename, '1',this.mapid);
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
    this.url='/mindmap/upload_resource/'+this.lid+"/"+this.node_id;
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

  ngOnInit() {
    this.getID1();
    this.showFile();
    this.showLink();
  }

  afterAddingFile(fileitem: FileItem): any {
    fileitem.withCredentials = false;
    console.log(fileitem);
  }


  showList1() {
    this.show_hide_val1 = !this.show_hide_val1;
  }
  exitLogin6() {
    this.userService.exitLogin(this.username)
        .subscribe(data => {
          alert("已登出！");
          this.router.navigateByUrl('login');
        });
  }
  jump(data: any){
    console.log(data);
    window.open(data);
  }

}
