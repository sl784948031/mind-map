import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import * as jsMind from '../jsmind/js/jsmind.js';
import '../jsmind/js/jsmind.screenshot.js'

const options = {
  container:'jsmind_container',
  theme:'orange',
  editable:true,
  mode :'side',
}

@Component({
  selector: 'app-mindmap',
  templateUrl: './mindmap.component.html',
  styleUrls: ['./mindmap.component.css']
})

export class MindmapComponent implements OnInit {
  title = '课程思维导图';
  
  mindMap = null;

  currentMap : number = 0;

  show_hide_val1 : boolean =false;
  show_hide_val2 : boolean =false;
  show_hide_val3 : boolean =false;
  items : any[] = [];

  constructor() { }

  ngOnInit() {
    this.mindMap = new jsMind(options);
  }

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
    this.items.push(mind1);
    this.changeMap(this.items.length - 1);
  }

  changeMap(e) {
    this.currentMap = e;
    this.mindMap.show(this.items[e]);
  }

  mapShoot() {
    // this.mindMap.show(this.currentMap);
    this.mindMap.screenshot.shootDownload();
  }

  removeNode() {
    const selected_id = this.mindMap.get_selected_node();
    if(!selected_id){
    alert('请先选择一个节点！');
    return;
    }
    this.mindMap.remove_node(selected_id);
    this.items[this.currentMap] = this.mindMap.get_data("node_tree");
  }
    
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
  }

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
  }

  changeNodeColor(e) {
    const selected_node = this.mindMap.get_selected_node();
    if(!selected_node){
    alert('请先选择一个节点！');
    return;
    }
    this.mindMap.set_node_color(selected_node.id, e.toElement.id, "#fff");
    this.items[this.currentMap] = this.mindMap.get_data("node_tree");
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
 
}
