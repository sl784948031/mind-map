import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { UserService } from '../../services/user.service';

import * as jsMind from '../../jsmind/js/jsmind.js';
import '../../jsmind/js/jsmind.screenshot.js'
import {ActivatedRoute} from '@angular/router';
import {Lesson} from '../../lesson';
import {MindMap} from '../../mindmap';
import {UserService} from '../../user.service';
import {Number} from '../../number';

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

  show_hide_val1 : boolean =false;
  show_hide_val2 : boolean =false;
  show_hide_val3 : boolean =false;
  items : any[] = [];
  ids : string[] = [];

  constructor(private route: ActivatedRoute,private userService: UserService) { }

  getID1() {
    const lid = this.route.snapshot.paramMap.get('id');
    console.log(lid);
    this.lid = lid;
    console.log(this.lid);
  }

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
  ngOnInit() {
    this.getID1();
    this.mindMap = new jsMind(options);
    this.getMindMap();
    // const mind1 = {
    //       "meta":{
    //         "name":"jsMind mindMap",
    //         "author":"zhang junjie",
    //         "version":"0.2"
    //       },
    //       "format":"node_tree",
    //       "data":{"id":"root","topic":"课程名称","children":[
    //             {"id":"part","topic":"组成","direction":"right","children":[
    //             ]},
    //             {"id":"part2","topic":"组成","direction":"right","children":[
    //             ]},
    //       ]}
    // }
    // this.items.push(mind1);
    // this.changeMap(this.items.length - 1);
  }

  // creatMap() {
  //   const mind1 = {
  //     "meta":{
  //       "name":"jsMind mindMap",
  //       "author":"zhang junjie",
  //       "version":"0.2"
  //     },
  //     "format":"node_tree",
  //     "data":{"id":"root","topic":"课程名称","children":[
  //           {"id":"part","topic":"组成","direction":"right","children":[
  //           ]},
  //           {"id":"part2","topic":"组成","direction":"right","children":[
  //           ]},
  //     ]}
  //   }
  //   this.items.push(mind1);
  //   this.changeMap(this.items.length - 1);
  // }

  changeMap(e) {
    this.currentMap = e;
    this.mindMap.show(this.items[e]);
  }

  mapShoot() {
    // this.mindMap.show(this.currentMap);
    this.mindMap.screenshot.shootDownload();
  }

  // removeNode() {
  //   const selected_id = this.mindMap.get_selected_node();
  //   if(!selected_id){
  //   alert('请先选择一个节点！');
  //   return;
  //   }
  //   if(!selected_id.parent) {
  //     window.alert('根节点无法被删除！');
  //     return;
  //   }
  //   this.mindMap.remove_node(selected_id);
  //   this.items[this.currentMap] = this.mindMap.get_data("node_tree");
  // }
    
  // addChildNode() {
  //   const selected_node = this.mindMap.get_selected_node(); 
  //   if(!selected_node){
  //   alert('请先选择一个节点！');
  //   return;
  //   }
  //   const nodeid = jsMind.util.uuid.newid();
  //   const topic = '新节点';
  //   const node = this.mindMap.add_node(selected_node, nodeid, topic);
  //   this.items[this.currentMap] = this.mindMap.get_data("node_tree");
  // }

  // addBrotherNode(e) {
  //   console.log(e)
  //   const selected_node = this.mindMap.get_selected_node(); 
  //   if(!selected_node){
  //   alert('请先选择一个节点！');
  //   return;
  //   }
   
  //   if(!selected_node.parent){
  //     alert('根节点无法被添加兄弟节点！');
  //     return;
  //   }
  //   const nodeid = jsMind.util.uuid.newid();
  //   const topic = '新节点';
  //   const node = this.mindMap.add_node(selected_node.parent, nodeid, topic);
  //   this.items[this.currentMap] = this.mindMap.get_data("node_tree");
  // }

  // changeNodeColor(e) {
  //   const selected_node = this.mindMap.get_selected_node();
  //   if(!selected_node){
  //   alert('请先选择一个节点！');
  //   return;
  //   }
  //   this.mindMap.set_node_color(selected_node.id, e.toElement.id, "#fff");
  //   this.items[this.currentMap] = this.mindMap.get_data("node_tree");
  // }
  
  showList1() {
    this.show_hide_val1 = !this.show_hide_val1;
  }

  showList2() {
    this.show_hide_val2 = !this.show_hide_val2;
  }

  showList3() {
    this.show_hide_val3 = !this.show_hide_val3;
  }

}
