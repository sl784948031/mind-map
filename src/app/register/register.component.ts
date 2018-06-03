import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = '欢迎来到注册界面';
  con1 = '用户名';
  con2 = '密码';
  con3 = '密码确认';
  constructor() { }

  ngOnInit() {
  }

}
