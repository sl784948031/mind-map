import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../service/account.service';
import {HomeworkService} from '../../service/homework.service';

import {MPNode} from '../../entity/MPNode';
import {Response} from '../../entity/response';
import {Submit} from "../../entity/Submit";
import {SelectQ} from "../../entity/selectQ";
import {DescripQ1} from "../../entity/descripQ";

@Component({
  selector: 'app-shomework',
  templateUrl: './shomework.component.html',
  styleUrls: ['./shomework.component.css']
})
export class ShomeworkComponent implements OnInit {
  // 作业数组
  homeworks : any[];
  // 答案数组
  answers : any[];
  // 作业提交信息的数组
  submits : Submit[];
  // 课程id
  lid: string;
  // 思维导图节点id
  node_id: string;
  // 选择题数组
  Q0sum: SelectQ[];
  // 简答题数组
  Q1sum: DescripQ1[];
  // 学生答题结果数组
  tm: any[];
  // 思维导图id
  mapid:string;
  // 用户名
  username3: string;
  constructor(private router: Router,private route: ActivatedRoute,private accountService: AccountService,
              private homeworkService: HomeworkService) { }

  ngOnInit() {
    this.getID1();
  }
  // 初始化全局变量
  getID1() {
    const mapid = this.route.snapshot.paramMap.get('mapid');
    this.mapid=mapid;
    const username = this.route.snapshot.paramMap.get('username');
    this.username3 = username;
    console.log(this.username3);
    this.accountService.examineLogin(this.username3)
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
    this.homeworks=[];
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
    mpNode.mapid=this.mapid;
    this.homeworkService.getQ0(mpNode)
        .subscribe(data => {
          console.log("enter q0");
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
              this.homeworks.push(tmp);
            }
          }
          console.log("enter q1");
          this.homeworkService.getQ1(mpNode)
              .subscribe(data => {
                console.log(1);
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
                this.answers = [];
                this.submits = [];
                this.initAnswer();
              });
        });
  }
  // 初始化答案
  initAnswer() {
    console.log(this.homeworks.length);
    for (let i = 0; i < this.homeworks.length; i++) {
      if (this.homeworks[i][0] == "0") {
        this.answers.push(["0",[false, false, false, false]]);
      }
      else if (this.homeworks[i][0] == "1") {
        this.answers.push(["1", []])
      }
    }
  }
  // 检查选择题答案对错
  checkAnswer() {
      this.tm=[];
    for (let i = 0; i < this.answers.length; i++) {
      let sub=new Submit();
      sub.username=this.username3;
      sub.mapid=this.mapid;
      sub.lid=this.lid;
      sub.node_id=this.node_id;
      if (this.answers[i][0] == "0") {
        let tmp = [];
        if (this.answers[i][1][0]) {
          tmp.push('A');
        }
        if (this.answers[i][1][1]) {
          tmp.push('B');
        }
        if (this.answers[i][1][2]) {
          tmp.push('C');
        }
        if (this.answers[i][1][3]) {
          tmp.push('D');
        }
        if(tmp.toString()==""){
        }else {
            if (tmp.toString() == this.homeworks[i][3].toString()) {
                // title，课程id，节点id，学生id，对错结果
                sub.title=this.homeworks[i][1];
                sub.answer="yes";
                this.tm.push(sub);
            } else {
                sub.title=this.homeworks[i][1];
                sub.answer="false";
                this.tm.push(sub);
            }
        }
      }
    }

  }
  // 提交学生答题结果
  submit() {
    this.checkAnswer();
    console.log(this.tm);
    this.homeworkService.submit(this.tm)
        .subscribe(data =>{
           console.log(data);
           let re=new Response();
           re=data;
           if(re.status=="答题成功"){
               alert("答题成功！");
           }else {
               alert(re.status);
           }
        });
  }
  // 登出
  exitLogin7() {
    this.accountService.exitLogin(this.username3)
        .subscribe(data => {
          alert("已登出！");
          this.router.navigateByUrl('login');
        });
  }
}
