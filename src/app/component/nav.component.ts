import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: '../design/nav.html',
})
export class NavComponent implements OnInit {
  menu1 = 'Home';
  menu2 = 'Demo';
  menu3 = 'Download';
  menu1url = '/';
  menu2url = '/demo';
  menu3url = '/download';
  constructor() {}

  ngOnInit() {}
}
