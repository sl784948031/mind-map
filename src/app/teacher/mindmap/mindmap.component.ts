import { Component, OnInit } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { UserService } from '../../services/user.service';

import * as jsMind from '../../jsmind/js/jsmind.js';
import '../../jsmind/js/jsmind.screenshot.js'
import {ActivatedRoute, Router} from '@angular/router';
import {MindMap} from '../../mindmap';
import {UserService} from '../../user.service';
import {Lesson} from '../../lesson';
import {Number} from '../../number';
import {Response} from '../../response';

const options = {
  container:'jsmind_container',
  theme:'orange',
  editable:true,
  mode :'side',
}

@Component({
  selector: 'app-mindmap',
  templateUrl: './mindmap.component.html',
  styleUrls: ['./mindmap.component.css'],
  // providers: [UserService]
})

export class MindmapComponent implements OnInit {
  title = '课程思维导图';
  // 课程id
  lid: string;
  // 思维导图对象
  mmp: MindMap = new MindMap();
  // 思维导图
  mindMap = null;
  // 当前思维导图在数组中的位置
  currentMap : number = 0;
  // 创建的思维导图的id
  createId : string;
  // 用户
  user : any;
  // 用户id
  userId : any;
  // 用户类型
  userType : any;
  // 用户名
  username: string;
  // 下拉菜单的显示判断
  show_hide_val1 : boolean =false;
  show_hide_val2 : boolean =false;
  show_hide_val3 : boolean =false;
  // 课程的所有思维导图
  items : any[] = [];
  // 课程的所有思维导图的id
  ids : string[] = [];
  // 思维导图id
  mapid: string;
  // 颜色
  nodeColor : string="#000000";
  fontColor : string="#ffffff";

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
    // this.user = this.userService.getUser();
    // this.userId = this.user.userId;
    // this.userType = this.user.userType;
  }

  ngOnInit() {
    this.mindMap = new jsMind(options);
    this.getID1();
    this.getMindMap();
  }
  // 初始化全局变量
  getID1() {
    const lid = this.route.snapshot.paramMap.get('id');
    console.log(lid);
    this.lid = lid;
    console.log(this.lid);
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
  // 创建思维导图
  creatMap() {
    const mind1 = {
      "meta":{
        "name":"jsMind mindMap",
        "author":"zhang junjie",
        "version":"0.2"
      },
      "format":"node_tree",
      "data":{"id":"root","topic":"课程名称","children":[
        {"id":"part","topic":"组成","direction":"right","children":[
        ]},
        {"id":"part2","topic":"组成","direction":"right","children":[
        ]},
      ]}
    }
    if (this.ids.includes(this.createId)) {
      alert("该id已存在，请重新创建！");
      this.createId = null;
      return;
    }
    this.ids.push(this.createId);
    this.items.push(mind1);
    this.changeMap(this.items.length - 1);
    this.createId = null;
    this.saveMindMap();
    this.getMindMap();
  }
  // 切换思维导图
  changeMap(e) {
    this.mapid=this.ids[e];
    console.log(this.mapid);
    this.currentMap = e;
    this.mindMap.show(this.items[e]);
  }
  // 思维导图截图
  mapShoot() {
    // this.mindMap.show(this.currentMap);
    this.mindMap.screenshot.shootDownload();
  }
  // 移除节点
  removeNode() {
    const selected_id = this.mindMap.get_selected_node();
    if(!selected_id){
      alert('请先选择一个节点！');
      return;
    }
    if(!selected_id.parent) {
      window.alert('根节点无法被删除！');
      return;
    }
    this.mindMap.remove_node(selected_id);
    this.items[this.currentMap] = this.mindMap.get_data("node_tree");
    this.saveMindMap();
  }
  // 获取选择节点的id
  get_selected_nodeid() {
    const selected_node = this.mindMap.get_selected_node();
    if (!!selected_node) {
      console.log(selected_node.id);
      return selected_node.id;
    }
  }
  // 增加子节点
  addChildNode() {
    const selected_node = this.mindMap.get_selected_node();
    if(!selected_node){
      alert('请先选择一个节点！');
      return;
    }
    const nodeid = jsMind.util.uuid.newid();
    const topic = '新节点';
    const node = this.mindMap.add_node(selected_node, nodeid, topic);
    this.items[this.currentMap] = this.mindMap.get_data("node_tree");
    this.saveMindMap();
  }
  // 增加兄弟节点
  addBrotherNode(e) {
    console.log(e)
    const selected_node = this.mindMap.get_selected_node();
    if(!selected_node){
      alert('请先选择一个节点！');
      return;
    }

    if(!selected_node.parent){
      alert('根节点无法被添加兄弟节点！');
      return;
    }
    const nodeid = jsMind.util.uuid.newid();
    const topic = '新节点';
    const node = this.mindMap.add_node(selected_node.parent, nodeid, topic);
    this.items[this.currentMap] = this.mindMap.get_data("node_tree");
    this.saveMindMap();
  }
  // 改变节点颜色
  changeNodeColor() {
    const selected_node = this.mindMap.get_selected_node();
    console.log(selected_node);
    console.log(this.nodeColor)
    if(!selected_node){
      alert('请先选择一个节点！');
      return;
    }
    this.mindMap.set_node_color(selected_node.id, this.nodeColor, null);
    this.items[this.currentMap] = this.mindMap.get_data("node_tree");
    this.saveMindMap();
  }
  // 改变字体颜色
  changeFontColor() {
    const selected_node = this.mindMap.get_selected_node();
    console.log(selected_node);
    console.log(this.fontColor)
    if(!selected_node){
      alert('请先选择一个节点！');
      return;
    }
    this.mindMap.set_node_color(selected_node.id, null, this.fontColor);
    this.items[this.currentMap] = this.mindMap.get_data("node_tree");
    this.saveMindMap();
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
  // 保存思维导图
  saveMindMap() {
    this.mmp.lid = this.lid;
    this.mmp.items = this.items;
    this.userService.saveMindMap(this.mmp)
        .subscribe(data => {
          console.log(data);
        });
    let num = new Number();
    num.lid = this.lid;
    num.ids = this.ids;
    this.userService.saveNum(num)
        .subscribe(data => {
          console.log(data);
        });

  }
  // 获取思维导图
  getMindMap(){
    let lesson = new Lesson();
    lesson.id = this.lid;
    this.userService.getMindMap(lesson)
        .subscribe(data => {
          console.log(data);
          if(data == null){
          }else {
            let mindmap = new MindMap();
            mindmap = data;
            this.items = mindmap.items;
          }
        });
    this.userService.getNum(lesson)
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
  // 登出
  exitLogin4() {
    this.userService.exitLogin(this.username)
        .subscribe(data => {
          alert("已登出！");
          this.router.navigateByUrl('login');
        });
  }
}
