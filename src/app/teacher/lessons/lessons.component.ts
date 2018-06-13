import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UserService } from '../../user.service';
import {User} from '../../person';
import {Lessons} from '../../lessons';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  lessons : any[];
  lesson: Lessons = new Lessons();
  user: User = new User();
  addLessonId : string;
  addLessonName : string;

  constructor(private route: ActivatedRoute, private userService: UserService) {}
  ngOnInit() {
    this.getLessons();
    this.lessons = [];
  }

  getLessons(): void {
    const username = this.route.snapshot.paramMap.get('username');
    console.log(username);
    this.user.username = username;
    this.userService.getLessons(this.user)
        .subscribe(data => {
          console.log(data);
          this.lesson.list = data;
          console.log(this.lesson.list);
          this.updateLesson(this.lesson);
        });
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

  updateLesson(lesson : Lessons) {
    let tmp = [];
    for (let i = 0; i < lesson.list.length; i ++) {
      tmp.push(lesson.list[i].id);
      tmp.push(lesson.list[i].name);
      tmp.push(lesson.list[i].people_num);
      this.lessons.push(tmp);
      tmp = [];
    }
  }
}
