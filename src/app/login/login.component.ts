import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  con1 = '用户名';
  con2 = '密码'
  constructor() { }

  ngOnInit() {
  }

}
