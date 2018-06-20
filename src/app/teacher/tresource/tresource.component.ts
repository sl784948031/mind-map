import { Component, OnInit, ElementRef} from '@angular/core';
import {FileUploader, FileSelectDirective, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import {RestService} from '../../download.service';
import { UpFiles} from '../../upfiles';
import {Upfile} from '../../upfile';
import {UserService} from '../../user.service';
import {LinkedList} from "ngx-bootstrap";

@Component({
  selector: 'app-tresource',
  templateUrl: './tresource.component.html',
  styleUrls: ['./tresource.component.css']
})
export class TresourceComponent implements OnInit {

  show_hide_val1: boolean = false;
  upfiles: UpFiles = new UpFiles();
  filenames: Upfile[];

  constructor(private restService: RestService, private userService: UserService , private elementRef: ElementRef) { }


  public url: string = 'http://localhost:8080/upload/1';
  public uploader: FileUploader = new FileUploader({url: this.url});
  selectedFiles: FileList;
  public filedescription: LinkedList<string> = new LinkedList();

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
    this.showFile();
    this.uploader.onAfterAddingFile = this.afterAddingFile;
    this.uploader.onSuccessItem = this.afterSuccess.bind(this);
  }

  afterAddingFile(fileitem: FileItem): any {
    fileitem.withCredentials = false;
    console.log(fileitem);
  }
  afterSuccess(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    alert("上传资源成功！");
    this.showFile();
  }
  showList1() {
    this.show_hide_val1 = !this.show_hide_val1;
  }

}
