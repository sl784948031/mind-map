import { Component, OnInit } from '@angular/core';
import { User } from '../person';
import { Response } from '../response';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {routerNgProbeToken} from '@angular/router/src/router_module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  // 用户对象
  user: User = new User();
  // 响应对象
  response: Response = new Response();
  title = '欢迎来到注册界面';
  con1 = '用户名';
  con2 = '密码';
  con3 = '密码确认';
  // 用户第二次输入的确认密码
  cpassword : string;
  // 用户类型
  type : string = 'teacher';
  // 获取用户类型
  getType(type : string) {
    this.type = type;
  }

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }
  // 用户注册
  createUser(): void {
    this.user.type = this.type;
    this.user.status = "offline";
    if (this.cpassword !== this.user.password) {
      alert('密码不一致');
    } else if (this.user.username == null ) {
      alert('用户名不能为空');
    } else {
      this.userService.createUser(this.user).subscribe(data => {
        console.log(data);
        this.response = data ;
        console.log(this.response);
        if ( this.response.status === 'yes') {
          console.log(1);
          alert('User created successfully.');
          this.router.navigateByUrl('login');
        } else {
          alert('User created failure, please input again !');
        }
      });
    }
  }
}
