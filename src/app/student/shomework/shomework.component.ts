import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shomework',
  templateUrl: './shomework.component.html',
  styleUrls: ['./shomework.component.css']
})
export class ShomeworkComponent implements OnInit {

  homeworks : any[];

  constructor() { }

  ngOnInit() {
     this.homeworks = [['0', '第一个问题', ['a', 'b', 'c']], ['1', '第二个问题', '']];
  }


}
