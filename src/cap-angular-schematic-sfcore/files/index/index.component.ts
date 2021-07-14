import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'index',
  template: `
    <section>
      <app-index-sf (setTitle)="setTitle($event)"></app-index-sf>
    </section>
  `,
  styles: [`
    section {
      min-height: 50vh;
      overflow: hidden;
      width: 100%;
      background-color: white;
      transition: margin-left 4s ease-in-out 1s;
      padding: 20px 20px;
    }
  `]
})
export class IndexComponent implements OnInit {

  title: string;

  constructor() {}

  ngOnInit() {}

  setTitle(title: string) {
    this.title = title;
  }

}
