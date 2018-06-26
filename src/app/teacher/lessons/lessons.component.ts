import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../service/account.service';
import {LessonService} from '../../service/lesson.service';
import {User} from '../../entity/person';
import {Response} from '../../entity/response';
import {Lessons} from "../../entity/lessons";
import {Lesson} from "../../entity/lesson";
import {Account} from "../../entity/account";


@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  // 老师开设的课程的数组 用于页面显示
  lessons: any[];
  // 从后端接收到的老师开设的课程的信息
  lesson: Lessons = new Lessons();
  // 用户
  user: User = new User();
  // 添加的课程的id
  addLessonId: string;
  // 添加的课程的名字
  addLessonName: string;
  // 老师添加课程时添加的课程的对象
  ls: Lesson = new Lesson();
  // 响应对象
  response: Response = new Response();
  // 新密码
  password1: string;
  // 确认密码
  password2: string;


  constructor(private route: ActivatedRoute, private accountService: AccountService, private lessonService: LessonService, private router: Router) {}
  ngOnInit() {
    this.getLessons();
    this.lessons = [];
    this.addLessonName = '';
    this.addLessonId = '';
  }
  // 获取老师开设的课程
  getLessons(): void {
    const username = this.route.snapshot.paramMap.get('username');
    console.log(username);
    this.user.username = username;
    this.accountService.examineLogin(this.user.username)
        .subscribe(data =>{
            let re=new Response();
            re=data;
            console.log(re.status);
            if(re.status == "online"){
                this.lessonService.getLessons(this.user)
                    .subscribe(data => {
                        console.log(data);
                        this.lesson.list = data;
                        console.log(this.lesson.list);
                        this.updateLesson(this.lesson);
                    });
            }else {
                alert("登录失效，请重新登录！");
                this.router.navigateByUrl('login');
            }
        });
  }
  // 添加课程
  addLesson() {
    console.log(this.addLessonName);
    if (this.addLessonId === '') {
      alert('课程ID不能为空');
    } else if (this.addLessonName === '') {
      alert('课程名字不能为空');
    } else {
      this.ls.id = this.addLessonId;
      this.ls.name = this.addLessonName;
      this.ls.teacher = this.user.username;
      this.lessonService.addLessons(this.ls).subscribe(
          data => {
            console.log(data);
            this.response = data;
            console.log(this.response);
            if (this.response.status === 'yes') {
              this.updateAll();
            } else {
              alert('该id的课程已经被添加过了！');
            }
          }
      );
    }
  }
  // 更新老师开设的课程的数组
  updateLesson(lesson: Lessons) {
    let tmp = [];
    this.lessons = [];
    for (let i = 0; i < lesson.list.length; i ++) {
      tmp.push(lesson.list[i].id);
      tmp.push(lesson.list[i].name);
      tmp.push(lesson.list[i].people_num);
      this.lessons.push(tmp);
      tmp = [];
    }
  }
  // 更新老师开设的课程的数组和从后端接收到的老师开设的课程的信息
  updateAll() {
    this.lessonService.getLessons(this.user)
        .subscribe(data => {
          console.log(data);
          this.lesson.list = data;
          console.log(this.lesson.list);
          this.updateLesson(this.lesson);
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
    this.accountService.changePass(account).subscribe(data => {
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
    exitLogin11
    () {
        this.accountService.exitLogin(this.user.username)
            .subscribe(data => {
                alert("已登出！");
                this.router.navigateByUrl('login');
            });
    }
}

