import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Http, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

import { UserService } from '../services/user.service';
=======
import { User } from '../person';
import { Response } from '../response';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
>>>>>>> 86dad35e7a8d11f4a7239e380ef3948dfac30fdd

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  response: Response = new Response();
  title = '欢迎来到注册界面';
  con1 = '用户名';
  con2 = '密码';
  con3 = '密码确认';
<<<<<<< HEAD

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


=======
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
>>>>>>> 86dad35e7a8d11f4a7239e380ef3948dfac30fdd
}
