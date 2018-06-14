import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tresource',
  templateUrl: './tresource.component.html',
  styleUrls: ['./tresource.component.css']
})
export class TresourceComponent implements OnInit {

  show_hide_val1 : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showList1() {
    this.show_hide_val1 = ! this.show_hide_val1;
  }

}
