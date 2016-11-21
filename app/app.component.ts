import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: require('./app.component.html')
})
export class AppComponent implements OnInit {
  constructor() {

  }
  ngOnInit() {

  }

  onViewCreated() {
    console.log('view created');
  }
}
