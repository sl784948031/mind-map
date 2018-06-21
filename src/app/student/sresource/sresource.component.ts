import { Component, OnInit} from '@angular/core';
import {FileUploader, FileSelectDirective, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import {RestService} from '../../download.service';
import { UpFiles} from '../../upfiles';
import {Upfile} from '../../upfile';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-sresource',
  templateUrl: './sresource.component.html',
  styleUrls: ['./sresource.component.css']
})

export class SresourceComponent implements OnInit {

  show_hide_val1: boolean = false;
  upfiles: UpFiles = new UpFiles();
  filenames: Upfile[];

  constructor(private restService: RestService, private userService: UserService ) { }




  showFile() {
    this.userService.show('1').subscribe(data => {
      console.log(data);
      this.upfiles.list = data;
      this.update(this.upfiles);
    });
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
