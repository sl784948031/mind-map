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
  user: User = new User();
  response: Response = new Response();
  constructor(private router: Router, private userService: UserService) { }

  type : string = 'teacher';

  getType(type : string) {
    this.type = type;
  }

  ngOnInit() {
  }

  login(): void {
    this.user.type = this.type;
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
