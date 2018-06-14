import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  lessons : any[];

  addLessonId : string;
  addLessonName : string;

  constructor() {}
  ngOnInit() {
    this.lessons = [['1', '课程', '20'], ['2', '课程', '20'], ['3', '课程', '20'], ['4', '课程', '20'], ['5', '课程', '20']];
  }

  addLesson() {
    let tmp = [];
    tmp.push(this.addLessonId);
    tmp.push(this.addLessonName);
    tmp.push(0);
    this.lessons.push(tmp);
    this.addLessonId="";
    this.addLessonName="";
  }
}
