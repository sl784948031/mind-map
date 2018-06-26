import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../service/account.service';
import {HomeworkService} from '../../service/homework.service';
import {MPNode} from '../../entity/MPNode';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {Response} from '../../entity/response';
import {SelectQ} from "../../entity/selectQ";
import {DescripQ1} from "../../entity/descripQ";

@Component({
  selector: 'app-thomework',
  templateUrl: './thomework.component.html',
  styleUrls: ['./thomework.component.css']
})
export class ThomeworkComponent implements OnInit {
  // 作业数组
  homeworks : any[];
  // 下拉菜单的显示判断
  show_hide_val1 : boolean = false;
  // 选择题部分
  question0 : string;
  choice1 : string;
  choice2 : string;
  choice3 : string;
  choice4 : string;
  answer1 : boolean = false;
  answer2 : boolean = false;
  answer3 : boolean = false;
  answer4 : boolean = false;
  // 简答题部分
  question1 : string;
  // 课程id
  lid: string;
  // 思维导图节点id
  node_id: string;
  // 选择题对象
  selectQ: SelectQ = new SelectQ();
  // 选择题数组
  Q0sum: SelectQ[];
  // 简答题对象
  descripQ: DescripQ1 = new DescripQ1();
  // 简答题数组
  Q1sum: DescripQ1[];
  // 用户名
  username: string;
  // 思维导图id
  mapid: string;
  constructor(private router: Router,private route: ActivatedRoute, private accountService: AccountService, private homeworkService: HomeworkService) { }

  ngOnInit() {
     this.homeworks = [];
    this.getID1();
  }
  // 初始化全局变量
  getID1() {
    const mapid = this.route.snapshot.paramMap.get('mapid');
    this.mapid=mapid;
    const lid = this.route.snapshot.paramMap.get('lid');
    console.log(lid);
    this.lid = lid;
    console.log(this.lid);
    const node_id = this.route.snapshot.paramMap.get('node_id');
    this.node_id = node_id;
    console.log(this.node_id);
    let mpNode = new MPNode();
    mpNode.lid = this.lid;
    mpNode.node_id= this.node_id;
    mpNode.mapid=this.mapid
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
          this.homeworkService.getQ0(mpNode)
              .subscribe(data => {
                console.log(data);
                if(data == null){
                } else {
                  this.Q0sum = data;
                  console.log(this.Q0sum);
                  for(let i = 0;i<this.Q0sum.length;i++){
                    let tmp = [];
                    let choice = [];
                    choice.push(this.Q0sum[i].a1, this.Q0sum[i].a2, this.Q0sum[i].a3, this.Q0sum[i].a4);
                    tmp.push('0');
                    tmp.push(this.Q0sum[i].title);
                    tmp.push(choice);
                    tmp.push(this.Q0sum[i].trueA);
                    console.log(this.Q0sum[i].rate);
                    tmp.push(this.Q0sum[i].rate);
                    this.homeworks.push(tmp);
                  }
                }
                this.homeworkService.getQ1(mpNode)
                    .subscribe(data => {
                      console.log(data);
                      if(data == null){
                      } else {
                        this.Q1sum = data;
                        console.log(this.Q1sum);
                        for(let i = 0;i<this.Q1sum.length;i++){
                          let tmp = [];
                          tmp.push('1');
                          tmp.push(this.Q1sum[i].title);
                          tmp.push([]);
                          tmp.push([]);
                          this.homeworks.push(tmp);
                        }
                      }
                    });
              });
        });
  }


  // 显示或隐藏下拉菜单
  showList1() {
    this.show_hide_val1 = !this.show_hide_val1;
  }
  // 移除作业
  removeHomework(homework : any[]) {
    if(homework[0] === "0"){
      let sq=new SelectQ();
      sq.lid=this.lid;
      sq.node_id=this.node_id;
      sq.mapid=this.mapid;
      sq.title=homework[1];
      console.log(sq);
      this.homeworkService.removeQ0(sq)
          .subscribe(data => {
            alert("选择题删除成功");
          });
    }else{
      let sq=new DescripQ1();
      sq.lid=this.lid;
      sq.node_id=this.node_id;
      sq.mapid=this.mapid;
      sq.title=homework[1];
      console.log(sq);
      this.homeworkService.removeQ1(sq)
          .subscribe(data => {
            alert("简答题删除成功");
          });
    }
    this.homeworks.splice(this.homeworks.indexOf(homework, 0), 1);
  }
  // 增加选择题
  addQuestion0() {
    for (let i = 0; i < this.homeworks.length; i++) {
      if (this.homeworks[i][1] == this.selectQ.title) {
        alert("题目已存在，添加失败");
        return;
      }
    }
    let tmp = [];
    let choice = [];
    choice.push(this.selectQ.a1, this.selectQ.a2, this.selectQ.a3, this.selectQ.a4);
    let answer = [];
    if (this.answer1) {
      answer.push('A');
    }
    if (this.answer2) {
      answer.push('B');
    }
    if (this.answer3) {
      answer.push('C');
    }
    if (this.answer4) {
      answer.push('D');
    }
    this.selectQ.trueA = answer;
    tmp.push('0');
    tmp.push(this.selectQ.title);
    tmp.push(choice);
    tmp.push(answer);
    this.homeworks.push(tmp);
    this.answer1 = false;
    this.answer2 = false;
    this.answer3 = false;
    this.answer4 = false;
    this.selectQ.lid=this.lid;
    this.selectQ.node_id=this.node_id;
    this.selectQ.mapid=this.mapid;
    console.log(this.selectQ);
    this.homeworkService.addQ0(this.selectQ)
        .subscribe(data => {
          alert("选择题添加成功");
          this.selectQ=new SelectQ();
        });
  }
  // 增加简答题
  addQuestion1() {
    for (let i = 0; i < this.homeworks.length; i++) {
      if (this.homeworks[i][1] == this.descripQ.title) {
        alert("题目已存在，添加失败");
        return;
      }
    }
    let tmp = [];
    tmp.push('1');
    tmp.push(this.descripQ.title);
    tmp.push([]);
    tmp.push([]);
    this.homeworks.push(tmp);
    this.descripQ.lid =this.lid;
    this.descripQ.node_id=this.node_id;
    this.descripQ.mapid=this.mapid;
    this.homeworkService.addQ1(this.descripQ)
        .subscribe(data => {
          alert("简单题添加成功");
          this.descripQ=new DescripQ1();
        });
  }
  // 登出
  exitLogin2() {
    this.accountService.exitLogin(this.username)
        .subscribe(data => {
          alert("已登出！");
          this.router.navigateByUrl('login');
        });
  }

}
