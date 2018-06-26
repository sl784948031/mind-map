import { Component, OnInit } from '@angular/core';

import * as jsMind from '../../jsmind/js/jsmind.js';
import '../../jsmind/js/jsmind.screenshot.js';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../service/account.service';
import {MindmapService} from '../../service/mindmap.service';
import {Response} from '../../entity/response';
import {Lesson} from "../../entity/lesson";
import {MindMap} from "../../entity/mindmap";
import {Number} from "../../entity/number";

const options = {
  container:'jsmind_container',
  theme:'orange',
  editable: false,
  mode :'side',
}

@Component({
  selector: 'app-studentmap',
  templateUrl: './studentmap.component.html',
  styleUrls: ['./studentmap.component.css']
})

export class StudentmapComponent implements OnInit {
  title = '课程思维导图';
  lid: string;
  mindMap = null;

  currentMap : number = 0;

  user : any;
  userId : any;
  userType : any;
    mapid:string;
  show_hide_val1 : boolean =false;
  show_hide_val2 : boolean =false;
  show_hide_val3 : boolean =false;
  items : any[] = [];
  ids : string[] = [];
  username: string;
  constructor(private router: Router,private route: ActivatedRoute,private accountService: AccountService,
              private mindmapService: MindmapService) { }

  getID1() {
    const lid = this.route.snapshot.paramMap.get('id');
    console.log(lid);
    this.lid = lid;
    console.log(this.lid);
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

  getMindMap(){
    let lesson = new Lesson();
    lesson.id = this.lid;
    this.mindmapService.getMindMap(lesson)
        .subscribe(data => {
          console.log(data);
          if(data == null){
          }else {
            let mindmap = new MindMap();
            mindmap = data;
            this.items = mindmap.items;
          }
        });
    this.mindmapService.getNum(lesson)
        .subscribe(data => {
          console.log(data);
          if(data == null){
          }else {
            let number = new Number();
            number = data;
            this.ids = number.ids;
          }
        });
  }
  ngOnInit() {
    this.getID1();
    this.mindMap = new jsMind(options);
    this.getMindMap();
  }

  changeMap(e) {
      this.mapid=this.ids[e];
    this.currentMap = e;
    this.mindMap.show(this.items[e]);
  }

  mapShoot() {
    // this.mindMap.show(this.currentMap);
    this.mindMap.screenshot.shootDownload();
  }

  showList1() {
    this.show_hide_val1 = !this.show_hide_val1;
  }

  showList2() {
    this.show_hide_val2 = !this.show_hide_val2;
  }

  showList3() {
    this.show_hide_val3 = !this.show_hide_val3;
  }
  exitLogin5() {
    this.accountService.exitLogin(this.username)
        .subscribe(data => {
          alert("已登出！");
          this.router.navigateByUrl('login');
        });
  }

}
