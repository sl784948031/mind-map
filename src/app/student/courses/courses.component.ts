import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  chooses : any[];
  lessons : any[];

  constructor() {}
  ngOnInit() {
    this.lessons = [['1', '课程', '20'], ['2', '课程', '20'], ['3', '课程', '20'], ['4', '课程', '20'], ['5', '课程', '20']];
    this.chooses = [];
  }

  chooseLesson(choose : any[]) {
      choose[2] = parseInt(choose[2]) + 1;
      this.chooses.push(choose);
      this.lessons.splice(this.lessons.indexOf(choose, 0), 1);
  }

}
