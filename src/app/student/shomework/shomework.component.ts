import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../user.service';
import {MPNode} from '../../MPNode';
import {SelectQ} from '../../selectQ';
import {DescripQ1} from '../../descripQ';

@Component({
  selector: 'app-shomework',
  templateUrl: './shomework.component.html',
  styleUrls: ['./shomework.component.css']
})
export class ShomeworkComponent implements OnInit {

  homeworks : any[];
  answers : any[];
  submits : any[];
  lid: string;
  node_id: string;
  Q0sum: SelectQ[];
  Q1sum: DescripQ1[];
  constructor(private route: ActivatedRoute,private userService: UserService) { }

  ngOnInit() {
    this.getID1();
    this.answers = [];
    this.submits = [];
    this.initAnswer();
  }

  getID1() {
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
    this.userService.getQ0(mpNode)
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
              this.homeworks.push(tmp);
            }
          }
        });
    this.userService.getQ1(mpNode)
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
  }

  initAnswer() {
    for (let i = 0; i < this.homeworks.length; i++) {
      if (this.homeworks[i][0] == "0") {
        this.answers.push(["0",[false, false, false, false]]);
      }
      else if (this.homeworks[i][0] == "1") {
        this.answers.push(["1", []])
      }
    }
  }

  checkAnswer() {
    for (let i = 0; i < this.answers.length; i++) {
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
        if (tmp.toString() == this.homeworks[i][3].toString()) {
          //title，课程id，节点id，学生id，对错结果
          this.submits.push(this.homeworks[i][1], "courseid", this.node_id, "studentId", "true");
        } else {
          this.submits.push(this.homeworks[i][1], "courseid", this.node_id, "studentId", "false");
        }
      }
    }
  }

  submit() {
    this.checkAnswer();
    console.log(this.submits);
  }

}
