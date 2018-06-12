import { Component, OnInit } from '@angular/core';
import { User } from '../person';
import { Response } from '../response';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  response: Response = new Response();
  title = '欢迎来到注册界面';
  con1 = '用户名';
  con2 = '密码';
  con3 = '密码确认';
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }
  createUser(): void {
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data);
      this.response = data ;
      console.log(this.response);
      if ( this.response.status === 'yes') {
        console.log(1);
        alert('User created successfully.');
        window.location.href = 'login';
      } else {
        alert('User created failure, please input again !');
      }
    });
  }
}
