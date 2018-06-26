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
  // 课程id
  lid: string;
  // 思维导图
  mindMap = null;
  // 当前思维导图在数组中的位置
  currentMap : number = 0;
  // 用户
  user : any;
  // 用户id
  userId : any;
  // 用户类型
  userType : any;
  // 思维导图id
  mapid:string;
  // 下拉菜单的显示判断
  show_hide_val1 : boolean =false;
  show_hide_val2 : boolean =false;
  show_hide_val3 : boolean =false;
  // 课程的所有思维导图
  items : any[] = [];
  // 课程的所有思维导图的id
  ids : string[] = [];
  // 用户名
  username: string;

  constructor(private router: Router,private route: ActivatedRoute,private accountService: AccountService,
              private mindmapService: MindmapService) { }

  // 初始化全局变量
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
  // 获取思维导图
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


  // 切换思维导图
  changeMap(e) {
      this.mapid=this.ids[e];
    this.currentMap = e;
    this.mindMap.show(this.items[e]);
  }
  // 思维导图截图
  mapShoot() {
    // this.mindMap.show(this.currentMap);
    this.mindMap.screenshot.shootDownload();
  }



  // 显示或隐藏下拉菜单
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
