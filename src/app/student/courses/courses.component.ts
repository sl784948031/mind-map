import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// import {UserService} from '../../service/user.service';
import {CourseService} from '../../service/course.service'; 
import {AccountService} from '../../service/account.service';
import {User} from '../../entity/person';

import {Response} from '../../entity/response';
import {Course} from "../../entity/course";
import {Lesson} from "../../entity/lesson";
import {Lessons} from "../../entity/lessons";
import {Courses} from "../../entity/courses";
import {Account} from "../../entity/account";


@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
    // 学生已选的课程的数组 用于页面显示
    chooses: Course[];
    // 老师开设的课程的数组 用于页面显示
    lessons: Lesson[];
    // 用户对象
    user: User = new User();
    // 从后端接收到的老师开设的课程的信息
    lesson: Lessons = new Lessons();
    // 从后端接收到的学生已选的课程的信息
    course: Courses = new Courses();
    // 学生选课时选择的课程的对象
    ls: Course = new Course();
    // 响应对象
    response: Response = new Response();
    // 新密码
    password1: string;
    // 确认密码
    password2: string;

    constructor(private route: ActivatedRoute, private accoutService: AccountService, private courseService: CourseService, private router: Router) {}
    ngOnInit() {
        this.getCourses();
        this.getAll();
    }
    // 学生选课
    chooseLesson(choose: Lesson) {
        this.ls.cid = choose.id;
        this.ls.name = choose.name;
        this.ls.people_num = choose.people_num;
        this.ls.student = this.user.username;
        this.ls.lid = choose.id;
        console.log(this.ls);
        this.courseService.addCourses(this.ls)
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
    // 获取老师开设的课程的数组和从后端接收到的老师开设的课程的信息
    getAll(): void {
        this.courseService.addAll(this.user)
            .subscribe(data => {
                this.lesson.list = data;
                this.updateLesson(this.lesson);
            });
    }
    // 获取学生已选的课程
    getCourses(): void {
        const username = this.route.snapshot.paramMap.get('username');
        console.log(username);
        this.user.username = username;
        this.accoutService.examineLogin(this.user.username)
            .subscribe(data =>{
                let re=new Response();
                re=data;
                console.log(re.status);
                if(re.status == "online"){
                    this.courseService.getCourses(this.user)
                        .subscribe(data => {
                            console.log(data);
                            this.course.list = data;
                            this.updateChoose(this.course);
                        });
                }else {
                    alert("登录失效，请重新登录！");
                    this.router.navigateByUrl('login');
                }
            });
    }
    // 更新老师开设的课程的数组
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
    // 更新学生已选的课程的数组
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
    // 学生选课后更新学生已选的课程的数组和从后端接收到的学生已选的课程的信息
    updateAll() {
        this.courseService.getCourses(this.user)
            .subscribe(data => {
                console.log(data);
                this.course.list = data;
                console.log(this.lesson.list);
                this.updateChoose(this.course);
            });
    }
    // 修改密码
    changePassword() {
        if (this.password1 != this.password2) {
            alert("两次密码输入不一致，修改失败！");
            return;
        }
        let account=new Account();
        account.username=this.user.username;
        account.password=this.password1;
        this.accoutService.changePass(account).subscribe(data => {
            let re=new Response();
            re=data;
            if(re.status == "same"){
                alert("新旧密码一致");
            }else if(re.status =="yes"){
                alert("修改成功");
            }else {
                alert("修改失败");
            }
        });
    }
    // 登出
    exitLogin10
    () {
        this.accoutService.exitLogin(this.user.username)
            .subscribe(data => {
                alert("已登出！");
                this.router.navigateByUrl('login');
            });
    }

}
