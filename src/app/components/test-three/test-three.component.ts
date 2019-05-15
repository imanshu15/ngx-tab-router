import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-three',
  templateUrl: './test-three.component.html',
  styleUrls: []
})
export class TestThreeComponent implements OnInit {

  static tabKey = 'TestThree';
  static tabTitle = 'Test Two Title';

  public data: any;

  constructor() {
    console.log('Test 3');
  }

  ngOnInit() {
    console.log('Data', this.data);
  }

}
