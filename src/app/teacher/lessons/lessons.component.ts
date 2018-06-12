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
    this.lessons = [[1, '课程'], [2, '课程'], [3, '课程'], [4, '课程'], [5, '课程'],[6, '课程'],[7, '课程'],[8, '课程'],[9, '课程']];
  }

  addLesson() {
    let tmp = [];
    tmp.push(this.addLessonId);
    tmp.push(this.addLessonName);
    this.lessons.push(tmp);
    this.addLessonId="";
    this.addLessonName="";
  }
}
