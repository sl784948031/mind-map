import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thomework',
  templateUrl: './thomework.component.html',
  styleUrls: ['./thomework.component.css']
})
export class ThomeworkComponent implements OnInit {

  homeworks : any[];
  show_hide_val1 : boolean = false;

  question0 : string; //选择题部分
  choice1 : string;
  choice2 : string;
  choice3 : string;
  choice4 : string;
  answer1 : boolean = false;
  answer2 : boolean = false;
  answer3 : boolean = false;
  answer4 : boolean = false;

  question1 : string; //简答题部分

  constructor() { }

  ngOnInit() {
     this.homeworks = [['0', '选择题', ['选项A', '选项B', '选项C', '选项D'], ['答案A', '答案B']], ['1', '简答题', '', '']];
  }

  showList1() {
    this.show_hide_val1 = !this.show_hide_val1;
  }

  removeHomework(homework : any[]) {
    this.homeworks.splice(this.homeworks.indexOf(homework, 0), 1);
  }

  addQuestion0() {
    let tmp = [];
    let choice = [];
    choice.push(this.choice1, this.choice2, this.choice3, this.choice4);
    let answer = [];
    if (this.answer1) answer.push('A');
    if (this.answer2) answer.push('B');
    if (this.answer3) answer.push('C');
    if (this.answer4) answer.push('D');
    tmp.push('0');
    tmp.push(this.question0);
    tmp.push(choice);
    tmp.push(answer);
    this.homeworks.push(tmp);
    this.question0 = ""; //选择题部分
    this.choice1 = "";
    this.choice2 = "";
    this.choice3 = "";
    this.choice4 = "";
    this.answer1 = false;
    this.answer2 = false;
    this.answer3 = false;
    this.answer4 = false;
  }

  addQuestion1() {
    let tmp = [];
    tmp.push('1');
    tmp.push(this.question1);
    tmp.push([]);
    tmp.push([]);
    this.homeworks.push(tmp);
    this.question1 = "";
  }

}
