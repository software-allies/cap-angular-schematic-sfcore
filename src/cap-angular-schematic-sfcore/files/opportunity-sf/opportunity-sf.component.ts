import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunity',
  template: `
    <section>
      <app-opportunity-sf></app-opportunity-sf>
    </section>
    `,
  styles: [`
    section {
      min-height: 80vh;
      overflow: hidden;
      width: 100%;
      background-color: white;
      transition: margin-left 4s ease-in-out 1s;
      padding: 20px 20px;
    }
  `]
})
export class OpportunitySFComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
