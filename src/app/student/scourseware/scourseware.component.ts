import { Component, OnInit} from '@angular/core';
import {FileUploader, FileSelectDirective, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import {RestService} from '../../download.service';
import { UpFiles} from '../../upfiles';
import {Upfile} from '../../upfile';
import {UserService} from '../../user.service';
import {MPNode} from '../../MPNode';
import {ActivatedRoute} from '@angular/router';

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
  constructor(private route: ActivatedRoute, private restService: RestService, private userService: UserService ) { }
  public url: string = 'http://localhost:8080/upload/';

  showFile() {
    let mpnode = new MPNode();
    mpnode.lid=this.lid;
    mpnode.node_id=this.node_id;
    console.log(mpnode);
    this.userService.show(mpnode).subscribe(data => {
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
    console.log(lid);
    this.lid = lid;
    console.log(this.lid);
    const node_id = this.route.snapshot.paramMap.get('node_id');
    this.node_id = node_id;
    this.url='http://localhost:8080/upload/'+this.lid+"/"+this.node_id;
    console.log(this.url);
  }

  update(upfiles: UpFiles) {
    let tmp = new Upfile();
    this.filenames = [];
    console.log(upfiles.list.length);
    for (let i = 0; i < upfiles.list.length; i ++) {
      tmp.lid = upfiles.list[i].lid;
      tmp.filename = upfiles.list[i].filename;
      this.filenames.push(tmp);
      tmp = new Upfile();
    }
  }
  downloadfile(filename) {
    console.log('downloadfile start');
    this.restService.download(filename, '1');
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

}
