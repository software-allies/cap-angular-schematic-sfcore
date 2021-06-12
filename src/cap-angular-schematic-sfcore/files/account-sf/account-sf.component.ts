import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  template: `
  <section>
    <app-account-sf></app-account-sf>
  </section>
    `,
  styles: [`
    section {
      min-height: 100vh;
      overflow: hidden;
      width: 100%;
      background-color: white;
      transition: margin-left 4s ease-in-out 1s;
      padding: 20px 20px;
    }
  `]
})
export class AccountSFComponent implements OnInit {

  constructor() { }
  
  ngOnInit() { }
}
