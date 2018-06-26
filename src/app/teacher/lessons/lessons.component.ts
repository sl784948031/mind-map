import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../../user.service';
import {User} from '../../person';
import {Lessons} from '../../lessons';
import { Lesson } from '../../lesson';
import {Response} from '../../response';
import {Account} from '../../account';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  lessons: any[];
  lesson: Lessons = new Lessons();
  user: User = new User();
  addLessonId: string;
  addLessonName: string;
  ls: Lesson = new Lesson();
  response: Response = new Response();

  password1: string;
  password2: string;


  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {}
  ngOnInit() {
    this.getLessons();
    this.lessons = [];
    this.addLessonName = '';
    this.addLessonId = '';
  }

  getLessons(): void {
    const username = this.route.snapshot.paramMap.get('username');
    console.log(username);
    this.user.username = username;
    this.userService.examineLogin(this.user.username)
        .subscribe(data =>{
            let re=new Response();
            re=data;
            console.log(re.status);
            if(re.status == "online"){
                this.userService.getLessons(this.user)
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
      this.userService.addLessons(this.ls).subscribe(
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

  updateAll() {
    this.userService.getLessons(this.user)
        .subscribe(data => {
          console.log(data);
          this.lesson.list = data;
          console.log(this.lesson.list);
          this.updateLesson(this.lesson);
        });
  }

  changePassword() {
    if (this.password1 != this.password2) {
      alert("两次密码输入不一致，修改失败！");
      return;
    }
    let account=new Account();
    account.username=this.user.username;
    account.password=this.password1;
    this.userService.changePass(account).subscribe(data => {
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
    exitLogin11
    () {
        this.userService.exitLogin(this.user.username)
            .subscribe(data => {
                alert("已登出！");
                this.router.navigateByUrl('login');
            });
    }
}

