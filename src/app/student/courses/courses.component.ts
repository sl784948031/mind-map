import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../user.service';
import {User} from '../../person';
import {Lessons} from '../../lessons';
import {Courses} from '../../courses';
import {Lesson} from '../../lesson';
import {Course} from '../../course';
import {Response} from '../../response';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
    chooses: Course[];    // 页面处显示
    lessons: Lesson[]; // 选课处显示
    user: User = new User();
    lesson: Lessons = new Lessons();
    course: Courses = new Courses();
    ls: Course = new Course();
    response: Response = new Response();

    constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {}
    ngOnInit() {
        this.getCourses();
        this.getAll();
    }

    chooseLesson(choose: Lesson) {
        this.ls.cid = choose.id;
        this.ls.name = choose.name;
        this.ls.people_num = choose.people_num;
        this.ls.student = this.user.username;
        this.ls.lid = choose.id;
        console.log(this.ls);
        this.userService.addCourses(this.ls)
            .subscribe(data => {
                console.log(data);
                this.response = data;
                if (this.response.status === 'yes') {
                    alert('选课成功');
                    this.updateAll();
                } else {
                    alert('选课失败');
                }

            });
        this.lessons.splice(this.lessons.indexOf(choose, 0), 1);
    }

    getAll(): void {
        this.userService.addAll(this.user)
            .subscribe(data => {
                this.lesson.list = data;
                this.updateLesson(this.lesson);
            });
    }
    getCourses(): void {
        const username = this.route.snapshot.paramMap.get('username');
        console.log(username);
        this.user.username = username;
        this.userService.getCourses(this.user)
            .subscribe(data => {
                console.log(data);
                this.course.list = data;
                this.updateChoose(this.course);
            });
    }

    updateLesson(lesson: Lessons) {
        let tmp = new Lesson();
        this.lessons = [];
        for (let i = 0; i < lesson.list.length; i ++) {
            tmp.id = lesson.list[i].id;
            tmp.name = lesson.list[i].name;
            tmp.people_num = lesson.list[i].people_num;
            tmp.teacher = lesson.list[i].teacher;
            this.lessons.push(tmp);
            tmp = new Lesson();
        }
    }
    updateChoose(lesson: Courses) {
        let tmp = new Course();
        this.chooses = [];
        for (let i = 0; i < lesson.list.length; i ++) {
            tmp.cid = lesson.list[i].cid;
            tmp.name = lesson.list[i].name;
            tmp.people_num = lesson.list[i].people_num;
            tmp.student = lesson.list[i].student;
            tmp.lid = lesson.list[i].lid;
            this.chooses.push(tmp);
            tmp = new Course();
        }
    }

    updateAll() {
        this.userService.getCourses(this.user)
            .subscribe(data => {
                console.log(data);
                this.course.list = data;
                console.log(this.lesson.list);
                this.updateChoose(this.course);
            });
    }

}
