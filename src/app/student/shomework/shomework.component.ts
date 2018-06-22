import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../user.service';
import {MPNode} from '../../MPNode';
import {SelectQ} from '../../selectQ';
import {DescripQ1} from '../../descripQ';

@Component({
  selector: 'app-shomework',
  templateUrl: './shomework.component.html',
  styleUrls: ['./shomework.component.css']
})
export class ShomeworkComponent implements OnInit {

  homeworks : any[];
  lid: string;
  node_id: string;
  Q0sum: SelectQ[];
  Q1sum: DescripQ1[];
  constructor(private route: ActivatedRoute,private userService: UserService) { }

  ngOnInit() {
    this.getID1();
    this.homeworks = [];
  }

  getID1() {
    const lid = this.route.snapshot.paramMap.get('lid');
    console.log(lid);
    this.lid = lid;
    console.log(this.lid);
    const node_id = this.route.snapshot.paramMap.get('node_id');
    this.node_id = node_id;
    console.log(this.node_id);
    let mpNode = new MPNode();
    mpNode.lid = this.lid;
    mpNode.node_id= this.node_id;
    this.userService.getQ0(mpNode)
        .subscribe(data => {
          console.log(data);
          if(data == null){
          } else {
            this.Q0sum = data;
            console.log(this.Q0sum);
            for(let i = 0;i<this.Q0sum.length;i++){
              let tmp = [];
              let choice = [];
              choice.push(this.Q0sum[i].a1, this.Q0sum[i].a2, this.Q0sum[i].a3, this.Q0sum[i].a4);
              tmp.push('0');
              tmp.push(this.Q0sum[i].title);
              tmp.push(choice);
              tmp.push(this.Q0sum[i].trueA);
              this.homeworks.push(tmp);
            }
          }
        });
    this.userService.getQ1(mpNode)
        .subscribe(data => {
          console.log(data);
          if(data == null){
          } else {
            this.Q1sum = data;
            console.log(this.Q1sum);
            for(let i = 0;i<this.Q1sum.length;i++){
              let tmp = [];
              tmp.push('1');
              tmp.push(this.Q1sum[i].title);
              tmp.push([]);
              tmp.push([]);
              this.homeworks.push(tmp);
            }
          }
        });
  }

}
