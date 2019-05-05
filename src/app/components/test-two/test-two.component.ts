import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: []
})
export class TestTwoComponent implements OnInit {

  static tabKey = 'TestThree';
  static tabTitle = 'Test Three Title';

  constructor() {
    console.log('Test 2');
  }

  ngOnInit() {
  }

}
