import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  title: string;

  constructor() {}

  ngOnInit() {}

  setTitle(title: string) {
    this.title = title;
  }

}
