import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: []
})
export class TestOneComponent implements OnInit {

  static tabKey = 'TestOne';
  static tabTitle = 'Test One Title';

  constructor() {
    console.log('Test 1');
  }

  ngOnInit() {
  }

}
