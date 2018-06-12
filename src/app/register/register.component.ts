import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  title = '欢迎来到注册界面';
  con1 = '用户名';
  con2 = '密码';
  con3 = '密码确认';

  useId : string;
  username : string;
  password : string;
  cpassword : string;
  type : string = 'teacher';

  constructor(public userService: UserService, public http: Http) {}

  ngOnInit() {
  }

  getType(type : string) {
    this.type = type;
  }

  // register() {
  //   if (this.username == null || this.password == null || this.cpassword == null) {
  //     alert("不能有空白项！");
  //     return;
  //   } else if (this.password != this.cpassword) {
  //     alert("两次密码填写不一致，请修改！");
  //     return;
  //   } else {
  //       let url = "http://54.201.190.180:8080/wishesmap/login";

  //       let param = {
  //         "user_name" :this.username,
  //         "user_pass" :this.password
  //       };

  //       let options = new RequestOptions({ method: "post" });

  //       this.http.post(url, param, options)
  //         .toPromise()
  //         .then(res => res.json())
  //         .then(body => {
            
  //       });
  //   }
  // }


}
