import { Component, OnInit } from '@angular/core';
import {User} from '../person';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import { Response } from '../response';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  con1 = '用户名';
  con2 = '密码';
  // 用户对象
  user: User = new User();
  // 响应对象
  response: Response = new Response();
  constructor(private router: Router, private userService: UserService) { }
  // 用户类型
  type : string = 'teacher';
  // 获取用户类型
  getType(type : string) {
    this.type = type;
  }

  ngOnInit() {
  }
  // 用户登录
  login(): void {
    this.user.type = this.type;
    this.user.status ="online";
    this.userService.login(this.user).subscribe(data => {
      console.log(data);
      this.response = data ;
      console.log(this.response);
      if (this.response.status === 'yes') {
        console.log(1);
        alert('User login successfully.');
        if (this.response.type === 'teacher') {
          this.router.navigateByUrl('teacher/' + this.response.username);
        } else {
          this.router.navigateByUrl('student/' + this.response.username);
        }
      } else {
        alert('User login failure, please input again !');
      }
    });
  }
}
