import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-admin',
  template: `
    <p>
      admin works!
    </p>
    
    <h2>nav</h2>
    <ul><li><a [routerLink]="['./users']">users</a></li></ul>
    
    <h2>content</h2>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
