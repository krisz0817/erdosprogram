import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent implements OnInit {
  new_main: any;

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth < 600) {

    }
  }

}
