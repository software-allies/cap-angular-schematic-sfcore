import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead',
  template: `
    <section>
      <app-lead-sf></app-lead-sf>
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
export class LeadSFComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
